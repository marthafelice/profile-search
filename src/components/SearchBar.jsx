import React from "react";
import { profiles } from "./data";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.firstName} ${profile.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const searchProfiles = () => {
    // update state to trigger re-render of filtered profiles list
    setSearchQuery(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search by name..."
        onClick={searchProfiles}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            searchProfiles();
          }
        }}
      />

      <ul className="list-display">
        {filteredProfiles.map((profile) => (
          <li key={profile.id} className="card">
            <div>
              <img
                src={profile.picture}
                alt={`${profile.firstName} ${profile.lastName}`}
              />
            </div>
            <div className="card-details">
              <p>{`${profile.id}`} </p>
              <p
                style={{ fontWeight: "bold" }}
              >{`${profile.title} ${profile.firstName} ${profile.lastName}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
