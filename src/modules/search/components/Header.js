import React, { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import { RouterLink } from "../../../lib/redux-saga-router";
import * as L from "../../../locationTemplates";
import SearchBar from "../../../ui/components/SearchBar";
import Container from "../../../ui/components/Container";
import Footer from "../../../ui/components/Footer";
import SocialLinks from "../../../ui/components/SocialLinks";

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
          <SocialLinks customStyle="text-lg gap-6 text-black" />
        )}

        {isDesktopOrLaptop ? (
          <SearchBar
            customContainerStyle="h-7 md:border md:border-black md:border-opacity-5"
            customInputStyle="disabled:bg-black disabled:bg-opacity-10 md:bg-white px-2 md:text-sm bg-lemon"
            customButtonStyle="disabled:bg-black disabled:bg-opacity-10 bg-lemon md:bg-white w-10 text-xl"
          />
        ) : (
          <div className="flex w-full">
            <SearchBar
              customFormStyle="w-full"
              customContainerStyle="w-full h-7 md:border md:border-black md:border-opacity-5"
              customInputStyle="w-full disabled:bg-black disabled:bg-opacity-10 md:bg-white px-2 md:text-sm bg-lemon"
              customButtonStyle="disabled:bg-black disabled:bg-opacity-10 bg-lemon md:bg-white w-10 text-xl"
            />
            <button
              type="button"
              className="text-2xl ml-4"
              onClick={handleMenuClick}
              aria-label="Open menu"
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
