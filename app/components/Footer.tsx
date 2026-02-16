import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ExternalLink from "./ui/ExternalLink";

/**
 * Main Footer of the Application
 */
function Footer() {
  return (
    <div className="bg-text text-background px-8 py-16 grid grid-cols-2">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p id="logo" className="text-8xl">
            Obsidian
          </p>
          <p>Where exceptional craftsmanship meets timeless style.</p>
        </div>
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
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
