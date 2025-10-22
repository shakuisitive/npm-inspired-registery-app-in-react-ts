import { Link, useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "../homepage/home-loader";

export const Homepage = () => {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;
  const renderedPackages = featuredPackages.map((pkg) => (
    <div
      key={pkg.name}
      className="flex flex-col justify-between gap-3 border rounded shadow p-3"
    >
      <div className="flex flex-col gap-1 border-bottom border-gray-500">
        <div className="font-bold text-center">{pkg.name}</div>
        <div className="text-sm text-gray-500">{pkg.description}</div>
        <div className="text-sm text-gray-500">
          {pkg.maintainers.length} maintainers
        </div>
      </div>
      <Link
        className="border rounded border-gray-900 text-center"
        to={`packages/${pkg.name}`}
      >
        View
      </Link>
    </div>
  ));

  return (
    <div className="space-y-8 container py-12">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for JavaScript. Search and view packages.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
};
