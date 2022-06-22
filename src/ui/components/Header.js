import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import { RouterLink } from "../../lib/redux-saga-router";
import * as L from "../../locationTemplates";
import SearchBar from "./SearchBar";
import Container from "./Container";

export default function Header() {
  return (
    <header className="h-10 bg-lemon fixed w-full">
      <Container customStyle="flex justify-between items-center h-10">
        <RouterLink to={L.Home.home()}>
          <h1 className="text-2xl font-bold leading-none text-black">Genie</h1>
        </RouterLink>

        <ul className="flex justify-center items-center flex-1 text-lg gap-6 text-black">
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
      </Container>
    </header>
  );
}
