import { getDisplayName } from "next/dist/shared/lib/utils.js";
import Center from "./components/Center.js";
import { client } from "@/lib/contentful.js";
import { getRecipes } from "@/lib/getRecipes.js";

export default async function Home(params) {
  // console.log(preview)
  const items  = await getRecipes(params);
  const Message = await client.getEntries({ content_type: "announcement" });
  return (
    <div className="min-h-screen text-slate-950 dark:text-slate-50">
      <main className="flex">
        <Center recipes={items} announcement={Message?.items[0]} />
      </main>
    </div>
  );
}
