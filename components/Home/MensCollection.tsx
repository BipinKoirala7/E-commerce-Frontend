import MensCollectionShowCaseProductList from "./MensCollectionShowCaseProductList";

function MensCollection() {
  return (
    <div className="min-h-100 flex flex-col gap-4 p-6 bg-primary rounded-4xl">
      <p className="text-3xl header-font font-bold">Mens Collection</p>
      <div className="w-full h-full flex">
        <MensCollectionShowCaseProductList />
      </div>
    </div>
  );
}

export default MensCollection;
