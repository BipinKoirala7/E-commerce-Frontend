"use client";

type IconButtonT = {
  icon: React.ReactNode;
};

function IconButton(props: IconButtonT) {
  const { icon } = props;
  return (
    <button
      onClick={() => console.log("Button Clicked")}
      className="flex items-center justify-center p-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition"
    >
      {icon}
    </button>
  );
}

export default IconButton;
