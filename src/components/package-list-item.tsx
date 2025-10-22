import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
  pack: PackageSummary;
}

export const PackageListItem = ({ pack }: PackageListItemProps) => {
  const renderedKeywords = (pack.keywords || []).map((keyword) => (
    <div
      key={keyword}
      className="border py-0.5 px-1 text-xs bg-light-gray rounded border-mid-gray text-dark-gray"
    >
      {keyword}
    </div>
  ));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-mid-gray p-6 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-center">
        <div className="flex flex-col col-2">
          <Link to={`/packages/${pack.name}`} className="text-xl font-bold text-near-black hover:text-npm-red transition-colors duration-200">
            {pack.name}
          </Link>
          <p className="text-sm text-dark-gray">{pack.description}</p>
          <div className="flex gap-1">{renderedKeywords}</div>
        </div>

        <div className="mr-6">
          <Link
            to={`/packages/${pack.name}`}
            className="py-2 px-3 rounded bg-npm-red text-white text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
