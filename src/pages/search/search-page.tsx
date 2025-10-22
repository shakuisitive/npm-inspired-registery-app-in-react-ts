import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./search-loader";
import { PackageListItem } from "../../components/package-list-item";

export const SearchPage = () => {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => (
    <PackageListItem pack={result} key={result.name} />
  ));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-mid-gray p-6">
        <h1 className="text-3xl font-bold text-near-black mb-2">Search Results</h1>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-dark-gray">
            {searchResults.length} package{searchResults.length !== 1 ? 's' : ''} found
          </span>
        </div>
      </div>
      <div className="space-y-4">{renderedResults}</div>
    </div>
  );
};
