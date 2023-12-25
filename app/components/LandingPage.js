// "use client";
import Hero from "./Hero";
import RecipeCard from "./RecipeCard";
import Announcement from "./Dialog";
import Link from "next/link";

const LandingPage = ({ data }) => {
  const {
    recipeCollection,
    landingPageContentCollection,
    announcementCollection,
  } = data;
  const announcement = announcementCollection?.items[0];
  const recipes = recipeCollection?.items;
  const content = landingPageContentCollection?.items[0];
  return (
      <div className="min-h-screen w-screen m-0 pt-10 pb-10 overflow-y-scroll scrollbar-hide">
        <Hero content={content} />
        <div id="hotRecipes" className="flex justify-center">
          {recipes ? (
            <div className="flex flex-wrap py-4 justify-center">
              {recipes?.map((recipe, i) => (
                <RecipeCard key={recipe?.slug || i} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center text-4xl py-6 font-bold content-center h-1/2">
              No featured recipes here!
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
          {announcement && <Announcement data={announcement} />}
      </div>
  );
};

export default LandingPage;
