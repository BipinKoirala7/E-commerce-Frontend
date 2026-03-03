import SearchFilters from "@/components/Search/SearchFilters";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col px-8 pt-2 pb-16">
      <SearchFilters />
      <div>{children}</div>
    </div>
  );
}

export default layout;
