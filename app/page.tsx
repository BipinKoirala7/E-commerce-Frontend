export default function Home() {
  return (
    <div className="flex gap-4 min-h-screen items-center justify-center bg-background text-text">
      <div className="flex px-8 py-4 gap-4 bg-foreground rounded-xl hover:brightness-95 cursor-pointer smooth-transition">
        Is this good or not?
      </div>
      <div className="header-font">Different font</div>
    </div>
  );
}
