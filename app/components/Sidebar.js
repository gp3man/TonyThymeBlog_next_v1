"use client";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  HiOutlineBuildingLibrary,
  HiOutlineHomeModern,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiOutlineRss,
  HiLockClosed,
} from "react-icons/hi2";
import useSpotify from "../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const spotifyApi = useSpotify();
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);
  return (
    <div className="text-gray-500 text-xs lg:text-sm lg p-5 border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-60">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-slate-50"
          onClick={() => signOut()}
        >
          <HiLockClosed className="w-5 h-5" /> <p>Log Out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineHomeModern className="w-5 h-5" /> <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineMagnifyingGlassCircle className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineBuildingLibrary className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px]" />
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlinePlusCircle className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineHeart className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineRss className="w-5 h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px]" />
        {/* Playlist */}
        {playlists?.map((playlist) => (
          <p
            onClick={() => {
              setPlaylistId(playlist.id);
            }}
            key={playlist.id}
            className="cursor-pointer hover:text-slate-50"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
