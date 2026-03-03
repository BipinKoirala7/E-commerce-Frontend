import CartList from "@/components/Cart/CartList";
import SelectedCartInfo from "@/components/Cart/SelectedCartInfo";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 bg-foreground flex flex-col gap-4 p-4 rounded-sm">
        <p className="text-2xl header-font">Cart</p>
        <CartList />
        <hr className="border-t-2 border-primary mt-3" />
        <SelectedCartInfo />
      </div>
    </div>
  );
}

export default page;
