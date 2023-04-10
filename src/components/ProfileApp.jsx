import React from "react";
import Header from "./Header";
import { profiles } from "./data";
import List from "./List";
import "../App.css";


 

export default function ProfileApp() {

  return (
    <div className="main-container">
      <Header/>
      <List profiles={profiles}/>
      
    </div>
  );
}
