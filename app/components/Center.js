// "use client";
import RecipeCard from "./RecipeCard";

const Center = ({recipes, announcement}) => {
// console.log(recipes)
// console.log(announcement)
  return (
    <div className="flex-grow min-h-screen m-4 pt-16 pb-14 overflow-y-scroll scrollbar-hide">
      {announcement && (
        <div className="flex justify-center"> Show announcements here!</div>
      )}
      <div className="flex justify-center">
      <div className="flex flex-col">
      {recipes?.map((recipe, i)=>(
        <RecipeCard id={recipe?.fields.slug || i} recipe={recipe} />
      ))}
      </div>
      </div>
    </div>
  );
};

export default Center;
