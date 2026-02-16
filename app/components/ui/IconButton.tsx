"use client";

type IconButtonT = {
  //  React Icons (expected)
  icon: React.ReactNode;
};

function IconButton(props: IconButtonT) {
  const { icon } = props;
  return (
    <button
      onClick={() => console.log("Button Clicked")}
      // Uses theme foreground color for hover state
      // Transition timing defined in globals.css (.smooth-transition)
      className="flex items-center justify-center p-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition"
    >
      {icon}
    </button>
  );
}

export default IconButton;
