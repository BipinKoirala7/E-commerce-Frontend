type ButtonT = {
  name: string;
};

export default function Button({ name }: ButtonT) {
  return (
    <button className="flex items-center justify-center px-4 py-2 rounded-sm hover:bg-foreground cursor-pointer smooth-transition">
      {name}
    </button>
  );
}
