import WishList from "@/components/Wishlist/WishList";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 bg-foreground flex flex-col gap-4 p-4 rounded-sm">
        <p className="text-2xl header-font">Wishlist</p>
        <WishList />
      </div>
    </div>
  );
}

export default page;
