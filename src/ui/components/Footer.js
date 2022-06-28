import React from "react";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer
      className="bg-lemon text-black font-semibold h-10 flex"
      data-testid="footer"
    >
      <SocialLinks customStyle="md:text-xl gap-4" />
    </footer>
  );
}
