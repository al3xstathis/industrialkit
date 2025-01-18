import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type SearchDocType = "component" | "guide" | "api";

type SearchDoc = {
  id: string;
  title: string;
  content: string;
  url: string;
  type: SearchDocType;
  tags?: string[];
  categories?: string[];
  description?: string;
  lastUpdated?: string;
  weight?: number;
};

interface DocumentFrontmatter {
  title?: string;
  description?: string;
  type?: SearchDocType;
  tags?: string[];
  categories?: string[];
  weight?: number;
  [key: string]: unknown; // Allow additional unknown frontmatter properties
}

async function exists(path: string) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function generateSearchIndex() {
  const docsDir = path.join(process.cwd(), "content");
  const outputPath = path.join(process.cwd(), "public/search-index.json");
  const searchDocs: SearchDoc[] = [];

  // Validate content directory exists
  try {
    if (!(await exists(docsDir))) {
      console.warn(`Warning: No content directory found at: ${docsDir}`);
      await fs.mkdir(docsDir, { recursive: true });
    }
  } catch (dirError) {
    console.error(`Error creating content directory: ${dirError}`);
    process.exit(1);
  }

  // Recursively read all markdown files
  async function processDirectory(dirPath: string) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          await processDirectory(fullPath);
        } else if (entry.name.endsWith(".mdx")) {
          try {
            const content = await fs.readFile(fullPath, "utf-8");
            const { data, content: mdxContent } = matter(content);
            const frontmatter = data as DocumentFrontmatter;

            // Generate URL from file path
            const url = fullPath
              .replace(docsDir, "")
              .replace(/\.mdx$/, "")
              .replace(/\\/g, "/");

            // Determine type based on path or frontmatter
            let type: SearchDocType = frontmatter.type || "guide";
            if (url.includes("/components/")) type = "component";
            if (url.includes("/api/")) type = "api";

            searchDocs.push({
              id: entry.name.replace(".mdx", ""),
              title: frontmatter.title || entry.name.replace(".mdx", ""),
              content: mdxContent.slice(0, 200), // First 200 chars as preview
              url,
              type,
              description: frontmatter.description,
              tags: frontmatter.tags,
              categories: frontmatter.categories,
              weight: frontmatter.weight,
              lastUpdated: new Date().toISOString(), // Add current timestamp
            });
          } catch (fileError) {
            console.warn(`Could not process file ${fullPath}: ${fileError}`);
          }
        }
      }
    } catch (processError) {
      console.error(`Error processing directory ${dirPath}: ${processError}`);
    }
  }

  try {
    // Process documents
    await processDirectory(docsDir);

    // Ensure public directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write index to public directory
    await fs.writeFile(outputPath, JSON.stringify(searchDocs, null, 2));

    console.log(`Generated search index with ${searchDocs.length} documents`);
  } catch (error) {
    console.error("Fatal error generating search index:", error);
    process.exit(1);
  }
}

// Run this during build
generateSearchIndex().catch(error => {
  console.error("Unhandled error in search index generation:", error);
  process.exit(1);
});