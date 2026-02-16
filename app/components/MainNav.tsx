import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import IconButton from "./ui/IconButton";
import { LuUserRound } from "react-icons/lu";
import NavButton from "./ui/NavButton";

const MainNav = () => {
  return (
    <div className="w-full h-16 grid grid-cols-3 items-center px-8 border-b border-b-foreground">
      <div className="h-full flex gap-4 items-center">
        <IconButton icon={<RxHamburgerMenu className="w-6 h-6" />} />
        <div className="">
          <NavButton route="/" name="Shop" />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <p id="logo" className="text-4xl">
          Obsidian
        </p>
      </div>
      <div className="h-full flex justify-end gap-4 items-center">
        <IconButton icon={<FiSearch className="w-6 h-6" />} />
        <IconButton icon={<LuUserRound className="w-6 h-6" />} />
      </div>
    </div>
  );
};

export default MainNav;
