import React from "react";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-lemon text-black font-semibold h-10 flex">
      <ul className="flex justify-center items-center flex-1 md:text-xl gap-4">
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
    </footer>
  );
}
