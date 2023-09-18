'use client'
// import { useRouter } from 'next/router'
import Link from "next/link";
const Header = () => {
  return ( <nav className="fixed top-0 left-0 right-0 h-[58px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100 shadow">
    <div className="pl-10">
    <span>Tony🌿Thyme</span>
    </div>
    <div className="flex pr-10 end-full">
          <Link href={"/Search"}>
            <p className="border-green-700 hover:text-green-400 dark:border-green-500 border-opacity-30 border-r-2 px-3 cursor-pointer mobi:text-xs sm:text-base">
              Search
            </p>
          </Link>
    </div>
  </nav> );
}

export default Header;
