import Link from "next/link";
import { TfiHome } from "react-icons/tfi";
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[55px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-white rounded-b-xl dark:bg-stone-900 text-stone-300  dark:text-stone-100 shadow">
      <div className="pl-1">
        <span className="cursor-pointer">Tony🌿Thyme</span>
      </div>
      <div className="absolute flex  pr-4 end-4">
        <Link
          href={"/recipes"}
          className="border-orange-700 hover:text-orange-400 dark:border-orange-500 border-opacity-30 px-3 cursor-pointer sm:text-base active:font-bold "
        >
          <p>Recipes</p>
        </Link>
        <Link
          href={"/"}
          className="border-orange-700 hover:text-orange-400 dark:border-orange-500 border-opacity-30 px-3 cursor-pointer sm:text-base border-l-2 active:text-xl"
        >
          <p>{<TfiHome size={20} />}</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
