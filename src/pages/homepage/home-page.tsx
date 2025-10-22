import { Link, useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "../homepage/home-loader";

export const Homepage = () => {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;
  const renderedPackages = featuredPackages.map((pkg) => (
    <div
      key={pkg.name}
      className="flex flex-col justify-between gap-3 border border-mid-gray rounded-xl shadow-sm bg-white p-4 hover:shadow-md transition-all duration-200"
    >
      <div className="flex flex-col gap-3 text-center">
        <div className="font-bold text-near-black">{pkg.name}</div>
        <div className="text-sm text-dark-gray">{pkg.description}</div>
        <div className="bg-light-gray border border-mid-gray rounded-lg p-2">
          <div className="text-sm text-dark-gray font-medium">
            {pkg.maintainers.length} maintainer{pkg.maintainers.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
      <Link
        className="border rounded-lg border-npm-red text-center bg-npm-red text-white py-2 hover:bg-opacity-90 transition-colors duration-200"
        to={`packages/${pkg.name}`}
      >
        View
      </Link>
    </div>
  ));

  return (
    <div className="space-y-8 container py-12">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-near-black">NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-dark-gray">
          The package manager for JavaScript. Search and view packages.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
};
