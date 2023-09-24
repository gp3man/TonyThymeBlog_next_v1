// 'use client'
import { client } from "@/lib/contentful.js";
import SearchBar from "../components/SearchBar";
// import { RecoilValue } from "recoil";
import FilterSidebar from "../components/FilterSideBar";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "@/lib/getRecipes";
export default async function Recipes(params) {
  const items = await getRecipes(params)
  console.log(items)

  // const recipes = response?.items;
  // const {
  //   banners,
  //   procedure,
  //   ingredients,
  //   recipeBy,
  //   serves,
  //   title,
  //   timeToCook,
  //   authorsNotes,
  // } = recipes[index]?.fields;
  return (
    <div className="min-h-screen m-4 pt-10 pb-14 overflow-y-scroll scrollbar-hide justify-center ">
      {/* <FilterSidebar /> */}
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Recipes</p>
        <SearchBar />
      </header>

      <section id="AllRecipes" className="flex justify-center">
        {items ? (
          <div className="flex flex-wrap py-4 justify-center">
            {items?.map((recipe, i) => (
              <RecipeCard key={recipe?.fields.slug || i} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center text-4xl py-6 font-bold content-center h-1/2">
            Come Back Soon!
            <br />
            <span className="font-normal text-lg text-gray-400">
              No Recipes Posted Yet
            </span>
          </div>
        )}
      </section>

    </div>
  );
}
