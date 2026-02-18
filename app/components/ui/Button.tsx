type ButtonT = {
  //  Display Text for Button
  name: string;
  //  Additional classes for additional styling
  className?: string;
};

export default function Button({name, className}: ButtonT) {
  return (
    <button
      //  Uses smooth transition defined in globals.css (.smooth-transition)
      className={`${className} flex items-center justify-center px-4 py-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition`}>
      {name}
    </button>
  );
}
