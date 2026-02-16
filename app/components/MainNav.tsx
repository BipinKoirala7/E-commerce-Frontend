import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import IconButton from "./ui/IconButton";

const MainNav = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-3">
      <div className="flex gap-4 items-center">
        <IconButton icon={<RxHamburgerMenu className="w-6 h-6" />} />
        <p>Shop</p>
      </div>
      <p id="logo" className="text-4xl">
        Obisdian
      </p>
      <div>
        <IconButton icon={<FiSearch className="w-6 h-6" />} />
      </div>
    </div>
  );
};

export default MainNav;
