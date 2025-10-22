import { Link } from "react-router-dom";
import { SearchInput } from "./search-input";

export const Header = () => {
  return (
    <header className="bg-white border-b-2 border-mid-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-npm-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">npm</span>
              </div>
              <span className="text-xl font-bold near-black">npm Registry</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchInput />
          </div>
        </div>
      </div>
    </header>
  );
};
