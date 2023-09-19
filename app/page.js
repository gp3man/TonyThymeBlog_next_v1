// import Sidebar from "./components/Sidebar.js";
import Center from "./components/Center.js";
import { client } from "@/lib/contentful.js";

export default async function Home() {
  const { items } = await client.getEntries({ content_type: "recipe" });
  const Message = await client.getEntries({ content_type: "announcement" });
  return (
    <div className="h-screen overflow-hidden text-slate-950 dark:text-slate-50">
      <main className="flex">
        <Center recipes={items} announcement={Message?.items} />
      </main>
    </div>
  );
}
