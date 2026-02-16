import Product from "./Product";

function ProductList() {
  return (
    <div className="grow w-full h-full grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductList;
