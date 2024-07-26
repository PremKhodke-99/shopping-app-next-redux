import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/product-card";
import { redirect } from "next/navigation";

export default async function Home() {


  const getSession = await auth();
  // console.log(getSession);
  if(!getSession?.user){
    redirect("/unauth-page")
  }

  const getAllProducts = await fetchAllProducts();
  // console.log(getAllProducts);

  return (
    <div>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {
          getAllProducts?.data?.length > 0 ? getAllProducts.data.map((item) => <ProductCard item={item} />) : null
        }
      </div>
    </div>

  );
}
