// 'use client'
import { client } from "@/lib/contentful.js";
import SearchBar from "../components/SearchBar";
// import { RecoilValue } from "recoil";
import FilterSidebar from "../components/FilterSideBar";
export default async function Recipes() {
  const response = await client.getEntries({
    content_type: "recipe",
  });

  const recipes = response?.items;
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
    <div className="min-h-screen m-4 pt-16 pb-14 overflow-y-scroll scrollbar-hide justify-center text-center">
      {/* <FilterSidebar /> */}
      <header className="flex flex-col p-3 m-3">
        <p className="font-bold text-3xl">Recipes</p>
        <SearchBar />
      </header>
    </div>
  );
}
