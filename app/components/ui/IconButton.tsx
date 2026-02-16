type IconButtonT = {
  icon: React.ReactNode;
};

function IconButton(props: IconButtonT) {
  const { icon } = props;
  return (
    <div className="flex items-center justify-center p-1 rounded-sm hover:bg-foreground cursor-pointer smooth-transition">
      {icon}
    </div>
  );
}

export default IconButton;
