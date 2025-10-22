import type { PackageDetails } from "./../../api/types/packageDetails";
import { getFeaturedPackages } from "./../../api/queries/get-featured-packages";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export const homeLoader = async (): Promise<HomeLoaderResult> => {
  const featuredPackages = await getFeaturedPackages();

  return { featuredPackages };
};
