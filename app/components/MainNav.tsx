import Search from "./MainNav/Search";
import Account from "./MainNav/Account";
import Logo from "./MainNav/Logo";
import Menus from "./MainNav/Menus";

const MainNav = () => {
  return (
    <div className="w-full h-16 grid grid-cols-3 items-center px-8 border-b border-b-foreground">
      <Menus />
      <Logo />
      <div className="h-full flex justify-end gap-4 items-center">
        <Search />
        <Account />
      </div>
    </div>
  );
};

export default MainNav;
