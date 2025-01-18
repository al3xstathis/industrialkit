"use client";
import type { SearchResult } from "@/app/api/search/route";
import { CommandPalette } from "@/components/command-palette";
import { Book, Component, Search, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useSearchIndex } from "./use-search";

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { search: performSearch, loading } = useSearchIndex();
  const [results, setResults] = React.useState<SearchResult[]>([]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Handle search changes
  React.useEffect(() => {
    const searchDocs = async () => {
      if (!search.trim()) {
        setResults([]);
        return;
      }
      const searchResults = await performSearch(search);
      setResults(searchResults);
    };

    searchDocs();
  }, [search, performSearch]);

  // Group results by type
  const groups = React.useMemo(() => {
    return {
      Components: results.filter((r) => r.type === "component"),
      Guides: results.filter((r) => r.type === "guide"),
      API: results.filter((r) => r.type === "api"),
    };
  }, [results]);

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "component":
        return <Component className="h-4 w-4" />;
      case "guide":
        return <Book className="h-4 w-4" />;
      case "api":
        return <Wrench className="h-4 w-4" />;
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-200"
      >
        <Search className="h-4 w-4" />
        <span>Search docs...</span>
        <span className="ml-2 hidden rounded-md border border-gray-300 bg-white px-1.5 text-xs group-hover:border-gray-400 md:block">
          ⌘K
        </span>
      </button>

      <CommandPalette
        isOpen={open}
        onChangeOpen={setOpen}
        search={search}
        onChangeSearch={setSearch}
        placeholder="Search documentation..."
      >
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin text-gray-400">⟳</div>
          </div>
        ) : results.length > 0 ? (
          Object.entries(groups).map(([heading, items]) =>
            items.length > 0 ? (
              <CommandPalette.Group key={heading} heading={heading}>
                {items.map((item) => (
                  <CommandPalette.Item
                    key={item.id}
                    icon={getIcon(item.type)}
                    onSelect={() => {
                      router.push("/docs/" + item.url);
                      setOpen(false);
                    }}
                  >
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      {item.description && (
                        <span className="text-sm text-gray-500">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </CommandPalette.Item>
                ))}
              </CommandPalette.Group>
            ) : null
          )
        ) : search ? (
          <div className="flex items-center justify-center py-8">
            <span className="text-gray-400">No results found</span>
          </div>
        ) : null}
      </CommandPalette>
    </>
  );
}