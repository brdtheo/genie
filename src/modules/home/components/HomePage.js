import React from "react";

import SearchBar from "../../../ui/components/SearchBar";

function Homepage() {
  return (
    <div className="flex flex-col w-full md:w-96 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl font-bold leading-none mb-2 text-white">
        Genie
      </h1>
      <q className="text-sm md:text-base leading-none text-white">
        Song Lyrics &amp; Knowledge
      </q>

      <SearchBar
        customContainerStyle="h-14 md:h-16 mt-6"
        customInputStyle="disabled:bg-opacity-60 disabled:border-0 bg-white border-4 py-2 px-4 w-full"
        customButtonStyle="disabled:bg-opacity-60 bg-white w-16 text-black text-xl md:text-2xl"
      />
    </div>
  );
}

export default Homepage;
