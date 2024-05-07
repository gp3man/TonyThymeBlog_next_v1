import LandingPage from "./components/LandingPage.js";
import { getTour } from "@/lib/getRecipes.js";
import Recipes from "./recipes/page.js";

export default async function Home() {
  const res = await getTour();
  return (
    <main className="flex m-0">
      {res ? <LandingPage data={res} /> : <Recipes />}
    </main>
  );
}
