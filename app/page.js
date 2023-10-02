import Center from "./components/Center.js";
import { client } from "@/lib/contentful.js";
import { getRecipes } from "@/lib/getRecipes.js";

export default async function Home({searchParams}) {
  const page =
    typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams?.limit === "string" ? Number(searchParams.limit) : 12;
  const search =
    typeof searchParams?.limit === "string" ? searchParams.search : undefined;
  const items  = await getRecipes({page, limit, query: search});
  return (
    <div className="min-h-screen text-slate-950 dark:text-slate-50">
      <main className="flex">
        <Center recipes={items} />
      </main>
    </div>
  );
}
