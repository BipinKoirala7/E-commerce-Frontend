type IconWithNameButtonT = {
  icon: React.ReactNode;
  name: string;
};

export default function IconWithNameButton({
  icon,
  name,
}: IconWithNameButtonT) {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      {name}
    </div>
  );
}
