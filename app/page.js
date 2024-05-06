import LandingPage from "./components/LandingPage.js";
import { getLanding } from "@/lib/getRecipes.js";
import Recipes from "./recipes/page.js";

export default async function Home() {
  const res = await getLanding();
  return (
    <main className="flex m-0">
      <LandingPage data={res} />
    </main>
  );
}
