// "use client";
import Hero from "./Hero";
import RecipeCard from "./RecipeCard";
import Announcement from "./AnnouncementCard";

const Center = ({ recipes, announcement }) => {
  return (
    <div className="flex-grow min-h-screen m-4 pt-10 pb-14 overflow-y-scroll scrollbar-hide">
      <Hero />
      {announcement && <Announcement data={announcement} />}
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {recipes?.map((recipe, i) => (
            <RecipeCard key={recipe?.fields.slug || i} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Center;
