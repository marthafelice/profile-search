import React from "react";
import { useState } from "react";

export default function SearchBar({getQuery}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    if(searchQuery.length < 1 && e.target.value == " ") return
    setSearchQuery(e.target.value)
    getQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}
