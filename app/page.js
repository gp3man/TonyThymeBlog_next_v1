import LandingPage from "./components/LandingPage.js";
import { getLanding } from "@/lib/getRecipes.js";

export default async function Home() {
  const res = await getLanding();
  return (
    <div className="min-h-screen text-slate-950 dark:text-slate-50">
      <main className="flex">
        <LandingPage data={res} />
      </main>
    </div>
  );
}
