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
  );
}
