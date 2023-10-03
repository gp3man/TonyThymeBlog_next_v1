import CatCircles from "@/app/components/CatLinks";
import { client } from "@/lib/contentful";
import { getCategories } from "@/lib/getRecipes";

const AllCategories = async () => {
  const categories = await getCategories({view: undefined})
  return (
    <section className=" flex flex-col text-center w-screen h-screen mt-16 text-stone-50">
      All Categories
      <CatCircles categories={categories}/>
    </section>
  );
};

export default AllCategories;
