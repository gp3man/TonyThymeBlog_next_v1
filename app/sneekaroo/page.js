import LandingPage from "./components/LandingPage.js";
import { getTour } from "@/lib/getRecipes.js";

export default async function Home() {
  const res = await getTour();
  return (
    <main className="flex m-0">
      <LandingPage data={res} /> 
    </main>
  );
}
