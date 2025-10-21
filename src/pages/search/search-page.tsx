import { useLoaderData } from "react-router-dom";
import type { PackageSummary } from "../../api/types/packageSummary";
import type { SearchLoaderResult } from "./search-loader";

export const SearchPage = () => {
  const data = useLoaderData() as SearchLoaderResult;

  return <div>SearchPage</div>;
};
