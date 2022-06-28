import React, { useState } from "react";
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMenuOutline,
} from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import { RouterLink } from "../../../lib/redux-saga-router";
import * as L from "../../../locationTemplates";
import SearchBar from "../../../ui/components/SearchBar";
import Container from "../../../ui/components/Container";
import Footer from "../../../ui/components/Footer";

export default function Header() {
  const [showSocialLinks, toggleSocialLinks] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });

  const handleMenuClick = () => toggleSocialLinks(!showSocialLinks);

  return (
    <header className="h-10 bg-lemon fixed w-full">
      <Container customStyle="flex justify-between items-center h-10">
        {isDesktopOrLaptop && (
          <RouterLink to={L.Home.home()}>
            <h1 className="text-xl md:text-2xl font-bold leading-none text-black">
              Genie
            </h1>
          </RouterLink>
        )}

        {isDesktopOrLaptop && (
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
        )}

        {isDesktopOrLaptop ? (
          <SearchBar small />
        ) : (
          <div className="flex w-full">
            <SearchBar small customStyle="w-full" />
            <button
              type="button"
              className="text-2xl ml-4"
              onClick={handleMenuClick}
            >
              {showSocialLinks ? <IoClose /> : <IoMenuOutline />}
            </button>
          </div>
        )}
      </Container>
      {showSocialLinks && <Footer />}
    </header>
  );
}
