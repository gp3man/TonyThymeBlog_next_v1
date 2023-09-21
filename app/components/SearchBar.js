"use client";
// import { useRecoilState } from "recoil";
// import { SearchName } from "../atoms/searchAtom";


const SearchBar = ({recipes}) => {
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   if (volume > 0 && volume < 100) {
  //     debouncedAdjustVolume(volume);
  //   }
  // }, [volume]);

  // const debouncedAdjustVolume = useCallback(
  //   debounce((volume) => {
  //     spotifyApi.setVolume(volume).catch((err) => {});
  //   }, 500),
  //   []
  // );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(console.log(e.target.Name.value));
      }}
    >
      <div className="relative mt-12 w-[60vw]">
        <input
          className="peer relative -top-3.5 m-6 w-[60vw] rounded-md border-b-2 border-slate-900 focus: outline-none focus:border-green-600 dark:text-gray-500 placeholder-transparent"
          type="text"
          name="Name"
          id="Name"
          // value={name}
          onChange={(e) => console.log(e.target.value)}
          placeholder="Recipe Name"
          required
        />
        <label
          className="absolute left-5 -top-3 mx-3 text-slate-950 dark:text-slate-50 text-xs transition-all peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:uppercase peer-focus:-top-3.5 peer-focus:text-slate-950 dark:peer-focus:text-slate-50 peer-focus:text-sm"
          htmlFor="Name"
        >
          Recipe Name
        </label>
      <input
        className="absolute -right-10 top-0 bg-zinc-900 text-slate-100 rounded-3xl p-2 hover:bg-zinc-500 hover:text-slate-50 dark:hover:bg-zinc-700 dark:hover:text-slate-50"
        type="submit"
        value="Search"
      />
      </div>
    </form>
  );
};

export default SearchBar;
