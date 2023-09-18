"use client";
import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify.js";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { useCallback, useEffect, useState } from "react";
import useSongInfo from "../hooks/useSongInfo.js";
import { useRecoilState } from "recoil";
import {
  PiFastForwardBold,
  PiRewindBold,
  PiPlayCircleDuotone,
  PiPauseDuotone,
} from "react-icons/pi";
import {
  MdOutlineReplay,
  MdSwitchAccessShortcut,
  MdOutlineVolumeDown,
  MdOutlineVolumeUp,
} from "react-icons/md";
import { debounce } from "lodash";
const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();
  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrackId(data.body?.item.id);
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };
  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      console.log(data)
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };
  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {});
    }, 500),
    []
  );
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-slate-50 grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="">
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artist?.[0]?.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <MdSwitchAccessShortcut className="button" />
        <PiRewindBold className="button" />
        {isPlaying ? (
          <PiPauseDuotone
            className="button w-10 h-10"
            onClick={handlePlayPause}
          />
        ) : (
          <PiPlayCircleDuotone
            className="button w-10 h-10"
            onClick={handlePlayPause}
          />
        )}
        <PiFastForwardBold className="button" />
        <MdOutlineReplay className="button" />
      </div>
      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-0">
        <MdOutlineVolumeDown
          className="button"
          onClick={() => volume > 0 && setVolume(volume - 10)}
        />
        <input
          className="w-14 md:w-28"
          type="range"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
        <MdOutlineVolumeUp
          className="button"
          onClick={() => volume < 100 && setVolume(volume + 10)}
        />
      </div>
    </div>
  );
};

export default Player;
