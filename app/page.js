import LandingPage from "./components/LandingPage.js";
import { getLanding } from "@/lib/getRecipes.js";
import Recipes from "./recipes/page.js";

export default async function Home() {
  // const res = await getLanding();
  return (
    <main className="flex min-h-screen">
      {/* <LandingPage data={res} /> */}
      <Recipes />
    </main>
  );
}
