import type { PackageDetails } from "./../types/packageDetails";
import { getPackage } from "./getPackage";

const FEATURED_PACKAGES = ["react", "typescript", "eslint", "vite"];

export const getFeaturedPackages = async (): Promise<PackageDetails[]> => {
  const promises = FEATURED_PACKAGES.map((pkg) => getPackage(pkg));

  return await Promise.all(promises);
};
