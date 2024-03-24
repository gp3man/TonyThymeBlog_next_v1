import TableRecipe from "@/app/components/TableRecipe";
import { v4 as uuidv4 } from "uuid";
import { fetchMealPlan } from "../actions";
import Image from "next/image";
const mealPlan = async ({ params }) => {
  const { mealPlan } = await fetchMealPlan(params.slug);
  const { summary, planName, recipesInPlanCollection, mealPlanThumbnail } =
    mealPlan;
  const recipes = recipesInPlanCollection.items;
  return (
    <div className="min-h-screen pt-16 px-4 md:px-32 pb-10 overflow-y-scroll scrollbar-hide justify-center">
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Meal Plan</p>
        <Image
          alt={planName}
          src={mealPlanThumbnail?.url}
          width={mealPlanThumbnail?.width}
          height={mealPlanThumbnail?.height}
          objectFit="contain"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl self-center py-6 "
        />
      </header>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-base-100">
            {planName}
            <p className="mt-1 text-sm font-normal text-gray-500">{summary}</p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-orange-50">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Total Time
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Link</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((r) => (
              <TableRecipe key={uuidv4()} recipeId={r?.sys?.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default mealPlan;
