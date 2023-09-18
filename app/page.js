// import { redirect } from "next/navigation";
// import { authOptions } from "./api/auth/[...nextauth]/options.js";
// import { getServerSession } from "next-auth/next";
// import Sidebar from "./components/Sidebar.js";
import Center from "./components/Center.js";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/api/auth/signin");
  // }
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
