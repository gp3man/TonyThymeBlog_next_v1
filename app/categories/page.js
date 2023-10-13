import CatCircles from "@/app/components/CatLinks";
import { getCategories } from "@/lib/getRecipes";

const AllCategories = async () => {
  const { categoryCollection } = await getCategories();
  const categories = categoryCollection?.items;
  return (
    <section className=" flex flex-col text-center w-screen h-screen mt-16 text-base-content">
      <h1 className="my-6 font-black text-xl">All Categories</h1>
      <CatCircles categories={categories} />
    </section>
  );
};

export default AllCategories;
