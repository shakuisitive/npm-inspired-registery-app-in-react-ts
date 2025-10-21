import type { PackageSummary } from "./../types/packageSummary";

interface SearchResponse {
  objects: { package: PackageSummary }[];
}

export const searchPackages = async (
  term: string
): Promise<PackageSummary[]> => {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );

  const data = (await res.json()) as SearchResponse;

  return data.objects.map(
    ({ package: { name, description, keywords, version } }) => ({
      name,
      description,
      keywords,
      version,
    })
  );
};
