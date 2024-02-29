import { getCategories } from "@/lib/getRecipes";
import Link from "next/link";
import HoverCatCard from "../components/HoverCatCard";

const AllCategories = async () => {
  const { categoryCollection } = await getCategories();
  const categories = categoryCollection?.items;
  return (
    <section className=" flex flex-col text-center w-full min-h-[86vh] mt-16 px-9 text-base-content">
      <h1 className="my-6 font-black text-xl">All Categories</h1>
      <div className="flex flex-wrap items-center justify-center pb-24">
        {categories?.map((cat, i) => (
          <Link key={i} href={`/categories/${cat?.sys?.id}`}>
            <div className="flex flex-wrap items-center justify-center">
              <HoverCatCard category={cat} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
