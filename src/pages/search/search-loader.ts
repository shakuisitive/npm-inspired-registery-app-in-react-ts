import type { PackageSummary } from "./../../api/types/packageSummary";
import { searchPackages } from "./../../api/queries/searchPackages";

interface SearchLoaderProps {
  request: Request;
}

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

export const searchLoader = async ({
  request,
}: SearchLoaderProps): Promise<SearchLoaderResult> => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const searchResults = await searchPackages(term);

  return { searchResults };
};
