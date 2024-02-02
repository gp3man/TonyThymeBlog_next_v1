import SearchBar from "../components/SearchBar";
import CatCircles from "../components/CatLinks";
import { fetchRecipes } from "./actions";
import InfiniteScrollRecipes from "./infinite-scroll-recipes";
import { v4 as uuidv4 } from "uuid";
export default async function Recipes({ searchParams }) {
  const search =
    typeof searchParams?.search === "string" ? searchParams.search : undefined;
  const { recipeCollection, categoryCollection } = await fetchRecipes({
    search
  });
  const categories = categoryCollection?.items;
  const recipes = recipeCollection?.items;
  return (
    <div className="min-h-screen pt-14 pb-14 overflow-y-scroll scrollbar-hide justify-center">
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Recipes</p>
        <div>
          <SearchBar />
          <CatCircles categories={categories} />
        </div>
      </header>
      <ul
        key={uuidv4()}
        id="AllRecipes"
        className="flex flex-col justify-center"
      >
        <InfiniteScrollRecipes initialRecipes={recipes} search={search} />
      </ul>
    </div>
  );
}
