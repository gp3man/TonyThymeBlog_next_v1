import CatCircles from "@/app/components/CatLinks";
import { getCategories } from "@/lib/getRecipes";

const AllCategories = async () => {
  const categories = await getCategories();
  return (
    <section className=" flex flex-col text-center w-screen h-screen mt-16 text-stone-50">
      All Categories
      <CatCircles categories={categories?.items} />
    </section>
  );
};

export default AllCategories;
