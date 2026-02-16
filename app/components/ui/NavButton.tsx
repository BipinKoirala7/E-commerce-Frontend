import Link from "next/link";

type NavButtonT = {
  //  Full or Relative Path
  route: string;
  //  Display Test for navigation Link
  name: string;
};

function NavButton(props: NavButtonT) {
  const { route, name } = props;
  return (
    <Link
      // Uses theme foreground color for hover state
      // Transition timing defined in globals.css (.smooth-transition)
      className="text-[1.1rem] px-3 py-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition"
      href={route}
    >
      {name}
    </Link>
  );
}

export default NavButton;
