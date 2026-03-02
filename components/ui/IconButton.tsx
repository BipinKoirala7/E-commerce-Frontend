"use client";

type IconButtonT = {
  //  React Icons (expected)
  icon: React.ReactNode;
  //  Any additional classes for additional style
  className?: string;
  //  Function for onClick
  onClick?: () => void;
};

function IconButton(props: IconButtonT) {
  const { icon, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      // Uses theme foreground color for hover state
      // Transition timing defined in globals.css (.smooth-transition)
      className={
        `flex items-center justify-center p-1.5 rounded-sm hover:bg-foreground cursor-pointer smooth-transition ` +
        className
      }
    >
      {icon}
    </button>
  );
}

export default IconButton;
