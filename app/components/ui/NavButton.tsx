import Link from "next/link";

type NavButtonT = {
  route: string;
  name: string;
};

function NavButton(props: NavButtonT) {
  const { route, name } = props;
  return (
    <Link
      className="text-[1.25rem] px-3 py-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition"
      href={route}
    >
      {name}
    </Link>
  );
}

export default NavButton;
