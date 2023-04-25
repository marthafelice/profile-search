import React, { useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import { profiles } from "../data";
import "../App.css";

export default function ProfileApp() {
  const [selectedProfile, setSelectedProfile] = useState(profiles);
  const getQuery = (query) => {

    const filteredProfile = profiles.filter(
      (profile) =>
        profile.firstName.toLowerCase().startsWith(query.toLowerCase()) ||
        profile.lastName.toLowerCase().startsWith(query.toLowerCase())
    );
    setSelectedProfile(filteredProfile)
  };
  return (
    <div className="main-container">
      <SearchBar getQuery={getQuery} />
      <List selectedProfile={selectedProfile}/>
    </div>
  );
}
