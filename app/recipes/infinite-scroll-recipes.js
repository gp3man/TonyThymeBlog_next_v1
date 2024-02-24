"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "./actions";

const InfiniteScrollRecipes = ({ search, initialRecipes }) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [spinAnimation, setSpinAnimation] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  async function loadMoreRecipes() {
    const next = page + 1;
    const data = await fetchRecipes({ search, page: next });
    if (data?.recipeCollection?.items?.length) {
      setSpinAnimation(true);
      setPage(next);
      setRecipes((prev) => [
        ...(prev?.length ? prev : []),
        ...data?.recipeCollection?.items,
      ]);
    } else {
      setSpinAnimation(false);
      console.log("done last load");
    }
  }
  useEffect(() => {
    if (inView) {
      loadMoreRecipes();
    }
  }, [inView]);
  return (
    <>
      {recipes.length ? (
        <li className="flex flex-wrap py-4 justify-center w-screen overflow-y-visible">
          {recipes?.map((recipe, i) => (
            <RecipeCard key={recipe?.slug || i} recipe={recipe} />
          ))}
        </li>
      ) : (
        <li className="text-center text-4xl py-6 font-bold content-center h-1/2">
          Hmm... No recipes down this path.
          <br />
          <span className="font-normal text-lg text-gray-400">Try Again!</span>
        </li>
      )}
      <li
        ref={ref}
        className="flex flex-col justify-center self-center mt-6 "
      >
        {spinAnimation &&
        (
            <p className="loading loading-ring loading-lg text-success self-center"></p>
        )}
      </li>
    </>
  );
};

export default InfiniteScrollRecipes;
