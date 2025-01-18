import { useCallback, useState } from "react";

export type SearchDoc = {
  id: string;
  title: string;
  content: string;
  url: string;
  type: "component" | "guide" | "api";
};

export function useSearchIndex() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string): Promise<SearchDoc[]> => {
    if (!query.trim()) return [];

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`,
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      return data.results;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { search, loading, error };
}
