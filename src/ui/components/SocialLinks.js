import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

export default function SocialLinks(props) {
  const { customStyle } = props;

  return (
    <ul
      className={`flex justify-center items-center flex-1 ${
        customStyle ? customStyle : ""
      }`}
    >
      <li>
        <a
          href="https://www.instagram.com/genius/"
          aria-label="Visit Genius Instagram account"
        >
          <IoLogoInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/genius"
          aria-label="Visit Genius Youtube channel"
        >
          <IoLogoYoutube />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Genius/"
          aria-label="Visit Genius Facebook account"
        >
          <IoLogoFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Genius"
          aria-label="Visit Genius Twitter account"
        >
          <IoLogoTwitter />
        </a>
      </li>
    </ul>
  );
}
