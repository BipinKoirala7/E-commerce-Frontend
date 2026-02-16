import React from "react";
import ExternalLink from "../ui/ExternalLink";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-6">
      <ExternalLink link="https://x.com">
        <FaTwitter className="text-[1.5rem] smooth-transition" />
      </ExternalLink>
      <ExternalLink link="https://instagram.com">
        <FaInstagram className="text-[1.5rem] smooth-transition" />
      </ExternalLink>
      <ExternalLink link="https://facebook.com">
        <FaFacebook className="text-[1.5rem]  smooth-transition" />
      </ExternalLink>
      <ExternalLink link="https://linkedin.com">
        <FaLinkedin className="text-[1.5rem] smooth-transition" />
      </ExternalLink>
    </div>
  );
}

export default Socials;
