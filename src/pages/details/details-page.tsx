import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./details-loader";

export const DetailsPage = () => {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4 text-near-black">{details.name}</h1>

      <div className="bg-white rounded-xl shadow-sm border border-mid-gray p-6">
        <h3 className="text-lg font-bold text-near-black mb-3">Description</h3>
        <div className="p-3 bg-light-gray rounded text-dark-gray">{details.description}</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-mid-gray p-6">
        <h3 className="text-lg font-bold text-near-black mb-3">License</h3>
        <div className="p-3 bg-light-gray rounded text-dark-gray">{details.license}</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-mid-gray p-6">
        <h3 className="text-lg font-bold text-near-black mb-3">Author</h3>
        <div className="p-3 bg-light-gray rounded text-dark-gray">{details.author.name}</div>
      </div>
    </div>
  );
};
