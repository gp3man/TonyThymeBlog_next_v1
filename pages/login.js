import { getProviders, signIn } from "next-auth/react";
import LogoWhite from "../public/Spotify_LogoWhite.png";
import Image from "next/image";
import "../app/globals.css";
const login = ({ providers }) => {
  return (
    <div className="flex flex-col h-screen justify-around p-12 items-center bg-black text-slate-50">
      <Image alt="LogoWhite" src={LogoWhite} width={300} className="w-1/3" />
      <div className="text-center">
      <p className="text-xl">Welcome, to ShareJams V2</p>
      <p className="text-lg">This is a remote app!</p>
      </div>
      <div>
      <p className="text-xs font-bold">
        In order to fully enjoy this app you will have to do the following:
      </p>
      <ol className="text-xs font-thin list-disc list-inside">
        <li>Login to a device using the spotify app.</li>
        <li>Click play on a song of choice, then pause it.</li>
        <li>**NOTE** Only Spotify Premium members have full access to the api calls.</li>
        <li>Jam on!</li>
      </ol>

      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#2aea73] text-slate-50 rounded-3xl p-3"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login to {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
