type ProductPageProps = {
  params: {
    productId: Promise<string>;
  };
};

async function page({ params }: ProductPageProps) {
  const productId = await params.productId;
  return <div>page</div>;
}

export default page;
