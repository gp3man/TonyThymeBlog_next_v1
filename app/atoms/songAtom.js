import { atom } from "recoil";
export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
export const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: null,
});
