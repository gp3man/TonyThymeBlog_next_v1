'use client'
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom.js";
import Song from "./Song.js";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div>
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
