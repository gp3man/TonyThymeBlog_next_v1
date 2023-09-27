// "use client";
import Hero from "./Hero";
import RecipeCard from "./RecipeCard";
import Announcement from "./AnnouncementCard";
import Link from "next/link";

const Center = ({ recipes, announcement }) => {
  return (
    <>
      {announcement &&(
        <Announcement data={announcement} />
        )}
    <div className="flex-grow min-h-screen m-4 pt-10 pb-10 overflow-y-scroll scrollbar-hide">
      <Hero />
      <div id="hotRecipes" className="flex justify-center">
        {recipes ? (
          <div className="flex flex-wrap py-4 justify-center">
            {recipes?.map((recipe, i) => (
              <RecipeCard key={recipe?.fields.slug || i} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center text-4xl py-6 font-bold content-center h-1/2">
            Come Back Soon!
            <br />
            <span className="font-normal text-lg text-gray-400">
              Try Looking for all my Recipes{" "}
              <Link
                className="font-bold underline hover:text-orange-500"
                href="/recipes"
              >
                Here
              </Link>{" "}
            </span>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Center;
