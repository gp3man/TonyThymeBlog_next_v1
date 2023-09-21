"use client";
import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { playlistIdState } from "../atoms/playlistAtom";

const FilterSidebar = () => {
  // const [playlists, setPlaylists] = useState([]);
  // const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  // const spotifyApi = useSpotify();
  // useEffect(() => {
  //   if (spotifyApi.getAccessToken()) {
  //     spotifyApi.getUserPlaylists().then((data) => {
  //       setPlaylists(data.body.items);
  //     });
  //   }
  // }, [session, spotifyApi]);
  return (
    <div className="text-gray-500 text-xs lg:text-sm lg p-5 border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-60">
      <div className="space-y-4">
        <span>FILTER BY:</span>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <p>Meal</p>
        </button>
        <hr className="border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <p>Dietary</p>
        </button>
        <hr className="border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <p>Method</p>
        </button>
        <hr className="border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <p>Protein</p>
        </button>
        <hr className="border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-slate-50 bottom-0">
          <p>Reset Filters</p>
        </button>
        {/* Playlist */}
        {/* {playlists?.map((playlist) => (
          <p
            onClick={() => {
              setPlaylistId(playlist.id);
            }}
            key={playlist.id}
            className="cursor-pointer hover:text-slate-50"
          >
            {playlist.name}
          </p>
        ))} */}
      </div>
    </div>
  );
};

export default FilterSidebar;
