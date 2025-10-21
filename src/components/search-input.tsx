import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search?term=" + term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="size-5 text-gray-500" />
        </div>
        <input
          type="text"
          value={term}
          placeholder="Search packages"
          className="pl-10 py-2 w-full border-0 shadow-none"
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </form>
  );
};
