import LandingPage from "./components/LandingPage.js";
import { getLanding } from "@/lib/getRecipes.js";

export default async function Home() {
  const res = await getLanding();
  return (
      <main className="flex min-h-screen">
        <LandingPage data={res} />
      </main>

  );
}
