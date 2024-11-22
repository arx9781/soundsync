"use client";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative mx-auto w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your media"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-full border border-neutral-700/50 bg-neutral-800/50 py-2 pl-10 pr-4 text-neutral-200 placeholder-neutral-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-500">
          <LuSearch className="h-5 w-5" />
        </div>
      </div>
    </form>
  );
}
