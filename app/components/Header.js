"use client";
import Link from "next/link";
import { TfiHome } from "react-icons/tfi";
const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[55px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100 shadow">
      <div className="pl-1">
        <span className="cursor-pointer">Tony🌿Thyme</span>
      </div>
      <div className="absolute pr-4 end-4">
        <Link href={"/"}>
          <p className="border-green-700 hover:text-green-400 dark:border-green-500 border-opacity-30 px-3 cursor-pointer mobi:text-xs sm:text-base">
            {<TfiHome size={20} />}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
