import Center from "./components/Center.js";
import { client } from "@/lib/contentful.js";

export default async function Home() {
  const { items } = await client.getEntries({ content_type: "recipe" });
  const Message = await client.getEntries({ content_type: "announcement" });
  console.log(Message.items[0]);
  return (
    <div className="min-h-screen text-slate-950 dark:text-slate-50">
      <main className="flex">
        <Center recipes={items} announcement={Message?.items[0]} />
      </main>
    </div>
  );
}
