import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "@/lib/getRecipes";
import Link from "next/link";
import CatCircles from "../components/CatLinks";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
export default async function Recipes({ searchParams }) {
  const session = await getServerSession(authOptions)
  console.log("recipes", session.user)
  const page =
    typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams?.limit === "string" ? Number(searchParams.limit) : 12;
  const search =
    typeof searchParams?.search === "string" ? searchParams.search : undefined;
  const { recipeCollection, categoryCollection, searchedCollection } =
    await getRecipes({ page, limit, search });
  const categories = categoryCollection?.items;
  const recipes = typeof searchParams?.search === "string"
    ? searchedCollection?.items
    : recipeCollection?.items;
  return (
    <div className="min-h-screen m-4 pt-10 pb-14 overflow-y-scroll scrollbar-hide justify-center">
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Recipes</p>
        <div>
          <SearchBar />
          <CatCircles categories={categories} />
        </div>
      </header>
      <section id="AllRecipes" className="flex flex-col justify-center">
        {recipes.length ? (
          <div className="flex flex-wrap py-4 justify-center w-screen">
            {recipes?.map((recipe, i) => (
              <RecipeCard key={recipe?.slug || i} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center text-4xl py-6 font-bold content-center h-1/2">
            Hmm... No recipes with this search.
            <br />
            <span className="font-normal text-lg text-gray-400">
              Try Again!
            </span>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <Link
            href={`/recipes?page=${page > 1 ? page - 1 : 1}`}
            className={
              "rounded border bg-secondary px-3 py-1 text-sm text-secondary-content" +
              (page <= 1 && "pointer-events-none opacity-50")
            }
          >
            Prev
          </Link>
          <Link
            href={`/recipes?page=${page + 1}`}
            className={"rounded border bg-secondary px-3 py-1 text-sm text-secondary-content" + (!recipes.length && "pointer-events-none opacity-50")}
          >
            Next
          </Link>
        </div>
      </section>
    </div>
  );
}
