import { type NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export type SearchResult = {
  id: string;
  title: string;
  content: string;
  url: string;
  type: "component" | "guide" | "api";
  description?: string;
  tags?: string[];
  categories?: string[];
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q")?.toLowerCase();

    if (!query) {
      return Response.json({ results: [] });
    }

    // Load search index
    const indexPath = path.join(process.cwd(), "public/search-index.json");
    const rawData = await fs.readFile(indexPath, "utf-8");
    const searchIndex: SearchResult[] = JSON.parse(rawData);

    // Split query into terms for better matching
    const searchTerms = query.split(" ").filter(Boolean);

    // Search and score results
    const results = searchIndex
      .map((doc) => {
        const titleMatches = searchTerms.filter((term) =>
          doc.title.toLowerCase().includes(term)
        ).length;

        const contentMatches = searchTerms.filter((term) =>
          doc.content.toLowerCase().includes(term)
        ).length;

        // Weight title matches higher than content matches
        const score = titleMatches * 2 + contentMatches;

        return {
          ...doc,
          score,
        };
      })
      .filter((doc) => doc.score > 0) // Only include results with matches
      .sort((a, b) => b.score - a.score) // Sort by relevance
      .slice(0, 10); // Limit to top 10 results

    // Remove score from final results
    const cleanResults = results.map(({ score, ...rest }) => rest);

    return Response.json({ results: cleanResults });
  } catch (error) {
    console.error("Search error:", error);
    return Response.json(
      { error: "Failed to perform search" },
      { status: 500 }
    );
  }
}