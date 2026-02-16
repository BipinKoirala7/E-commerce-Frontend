import { FaCopyright } from "react-icons/fa";
import FooterLinks from "./Footer/FooterLinks";
import FooterMainSection from "./Footer/FooterMainSection";

/**
 * Main Footer of the Application
 */
function Footer() {
  return (
    <div className="w-full bg-text text-background px-8 pt-16 pb-4 grid grid-cols-2 gap-8">
      <FooterMainSection />
      <FooterLinks />
      <div className="w-full flex gap-1 opacity-50 items-center justify-center col-span-2">
        <p>Copyrights</p>
        <FaCopyright />
        <p>Bipin Koirala. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
