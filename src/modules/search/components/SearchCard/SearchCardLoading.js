import React from "react";

export default function SearchCardLoading() {
  return (
    <article
      className="w-full h-20 flex bg-white bg-opacity-5"
      data-testid="search-card-loading"
    >
      <div className="w-20 h-full animate-pulse bg-white bg-opacity-20"></div>

      <div className="ml-4 py-2 flex-1">
        <div className="animate-pulse bg-white bg-opacity-20 h-6 w-3/4 md:w-72 mb-2"></div>
        <div className="animate-pulse bg-white bg-opacity-20 h-5 w-1/2 md:w-56"></div>
      </div>
    </article>
  );
}
