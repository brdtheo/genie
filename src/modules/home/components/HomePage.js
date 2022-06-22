import React from "react";

import SearchBar from "../../../ui/components/SearchBar";

function Homepage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold leading-none mb-2 text-white">Genie</h1>
      <q className="leading-none text-white">Song Lyrics &amp; Knowledge</q>

      <SearchBar />
    </div>
  );
}

export default Homepage;
