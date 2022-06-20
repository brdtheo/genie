import React from "react";

import { RouterLink } from "../../../lib/redux-saga-router";
import SearchBar from "../../../ui/components/SearchBar";
import * as L from "../../../locationTemplates";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

function SearchPage() {
  return (
    <>
      <header className="h-10 flex justify-between items-center">
        <RouterLink to={L.Home.home()}>
          <h1 className="text-2xl font-bold leading-none text-white">Genie</h1>
        </RouterLink>

        <ul className="flex justify-center items-center flex-1 text-lg gap-6 text-white">
          <li>
            <a href="https://www.instagram.com/genius/">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/genius">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Genius/">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Genius">
              <IoLogoTwitter />
            </a>
          </li>
        </ul>

        <div>
          <SearchBar small />
        </div>
      </header>
    </>
  );
}

export default SearchPage;
