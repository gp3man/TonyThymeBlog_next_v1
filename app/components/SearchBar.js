"use client";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  useEffect(() => {
    if (!name) {
      router.push("/recipes");
    } else {
      debouncedSearch(name);
    }
  }, [name, router]);

  const debouncedSearch = useCallback(
    debounce((lookUp) => {
      router.push(`/recipes?search=${name}`);
    }, 800),
    [name, router]
  );
  return (
    <div className="flex justify-center">
      <div className="relative mt-6 w-[60vw] flex flex-col justify-center">
        <input
          className="peer relative -top-3.5 m-6  rounded-md border-b-4 border-x-2 border-slate-900 focus: outline-none focus:border-orange-600 dark:text-gray-500 placeholder-transparent"
          type="text"
          name="Name"
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          // required
        />
        <label
          className="absolute left-5 -top-3 mx-3 text-slate-950 dark:text-slate-50 text-xs transition-all peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus:-top-3.5 peer-focus:text-slate-950 dark:peer-focus:text-slate-50 peer-focus:text-sm flex"
          htmlFor="Name"
        >
          Search Recipe
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
