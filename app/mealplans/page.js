import { fetchMealPlans } from "./actions";
import InfiniteScrollPlans from "./infinite-scroll-mealplans";
import { v4 as uuidv4 } from "uuid";
export default async function mealPlans({ searchParams }) {
  const { mealPlanCollection } = await fetchMealPlans();
  const plans = mealPlanCollection?.items;
  return (
    <div className="min-h-screen pt-14  overflow-y-scroll scrollbar-hide justify-center">
      <header className="flex flex-col p-3 m-3 justify-center">
        <p className="font-bold text-3xl text-center">Meal Plans</p>
      </header>
      <ul key={uuidv4()} id="AllPlans" className="flex flex-col justify-center">
        <InfiniteScrollPlans initialPlans={plans} />
      </ul>
    </div>
  );
}
