"use client";
import iconWhite from "../../public/Spotify_IconWhite.png";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistState, playlistIdState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs.js";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];
const Center = () => {
  const { data: session, status } = useSession();
  const [color, setColor] = useState("from-violet-500");
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && playlistId){
      spotifyApi
        .getPlaylist(playlistId)
        .then((data) => {
          setPlaylist(data.body);
        })
        .catch((err) => console.error("Something Went Wrong!", err));
    }
  }, [spotifyApi, playlistId]);
console.log(playlistId)
  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
          onClick={signOut}
        >
          {session?.user.image ? (
            <img className="rounded-full w-10 h-10" src={session?.user.image} />
          ) : (
            <Image
              className="rounded-full w-10 h-10"
              src={iconWhite}
              alt="profileSub"
            />
          )}
          <h2>{session?.user.name}</h2>
          <HiChevronDown />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p className="uppercase">Playlist</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
