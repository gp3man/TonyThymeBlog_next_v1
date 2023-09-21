// "use client";
import Hero from "./Hero";
import RecipeCard from "./RecipeCard";
import Announcement from "./AnnouncementCard";

const Center = ({ recipes, announcement }) => {
  return (
    <div className="flex-grow min-h-screen m-4 pt-10 pb-10 overflow-y-scroll scrollbar-hide">
      <Hero />
      {announcement ? <Announcement data={announcement} /> : null}
      <div className="flex justify-center">
        {recipes ?
        <div className="flex flex-wrap py-4 justify-center">
          {recipes?.map((recipe, i) => (
            <RecipeCard key={recipe?.fields.slug || i} recipe={recipe} />
          ))}
        </div>

        :
        <div className="text-center text-4xl py-6 font-bold content-center h-1/2">
          Come Back Soon!<br/>
          <span className="font-normal text-lg text-gray-400">No Recipes Posted Yet</span>
        </div>
        }
      </div>
    </div>
  );
};

export default Center;
