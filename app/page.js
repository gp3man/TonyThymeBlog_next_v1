// import Sidebar from "./components/Sidebar.js";
import Center from "./components/Center.js";

export default async function Home() {
  return (
    <div className="h-screen overflow-hidden text-slate-50">
      <main className="flex">
        {/* <Sidebar /> */}
        <Center />
      </main>
      {/* <div className="sticky bottom-0">
      </div> */}
    </div>
  );
}
