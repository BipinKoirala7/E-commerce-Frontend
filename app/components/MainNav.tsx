import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

const MainNav = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3  bg-orange-200">
      <RxHamburgerMenu />
      <div>
        <p id="logo">Obisdian</p>
      </div>
      <div>
        <FiSearch />
      </div>
    </div>
  );
};

export default MainNav;
