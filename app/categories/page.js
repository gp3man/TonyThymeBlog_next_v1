import { getCategories } from "@/lib/getRecipes";
import Link from "next/link";
import HoverCatCard from "../components/HoverCatCard";

const AllCategories = async () => {
  const { categoryCollection } = await getCategories();
  const categories = categoryCollection?.items;
  return (
    <section className=" flex flex-col text-center w-screen min-h-screen mt-16 px-9 text-base-content">
      <h1 className="my-6 font-black text-xl">All Categories</h1>
      <div className="flex flex-wrap items-center justify-center">
        {categories?.map((cat, i) => (
        <Link key={i} href={`/categories/${cat?.sys?.id}`}>
          <div className="flex flex-wrap items-center justify-center">
          {/* <HoverCatCard category={cat} /> */}
          1
          </div>
        </Link>
      ))}
      </div>
    </section>
  );
};

export default AllCategories;
