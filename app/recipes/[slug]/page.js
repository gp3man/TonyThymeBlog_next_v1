import { client, previewClient } from "@/lib/contentful.js";
import RecipeDetail from "../../components/RecipeDetail";
import RichText from "../../components/RichText";
import LogoImage from "@/app/components/LogoImage";
import Link from "next/link";
import PhotoCard from "../../components/PhotoCard";
import Checkbox from "@/app/components/CheckBox";
import Image from "next/image";
// import { redirect } from "next/dist/server/api-utils";

export default async function RecipePage({params}) {
  // const currentClient = preview ? previewClient : client;
  const response = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  // if (!response?.items?.length) {
  //   redirect('/');
  // }
  const recipe = response?.items?.[0];
  const {
    banners,
    procedure,
    ingredients,
    recipeBy,
    serves,
    title,
    timeToCook,
    authorsNotes,
    timeToPrep,
  } = recipe?.fields;
  return (
    <section className="flex min-h-screen m-4 pt-16 overflow-y-scroll scrollbar-hide justify-center">
      {/* {preview && (
        <>
          You're in preview mode!!!
          <Link href="/api/exit-preview">Exit preview</Link>
        </>
      )} */}
      <RecipeDetail>
        <header>
          <h1 className="text-lg md:text-4xl font-black text-base-content py-1">
            {title}
          </h1>
          <div className="flex flex-col justify-center content-center">
            <p className="text-sm font-thin">
              By:
              <span className=""> {recipeBy?.fields?.name}</span>
            </p>
            {recipeBy?.fields?.image && (
              <div className="flex justify-center pb-4">
                <LogoImage
                  alt={recipeBy?.fields?.image?.fields?.title}
                  src={recipeBy?.fields?.image?.fields?.file?.url}
                  width={
                    recipeBy?.fields?.image?.fields?.file?.details?.image?.width
                  }
                  height={
                    recipeBy?.fields?.image?.fields?.file?.details?.image
                      ?.height
                  }
                  className="w-[20px] h-[20px md:w-[40px] md:h-[40px] rounded-full left-1/2"
                />
              </div>
            )}
          </div>
          {/* Notes */}
        </header>
        <div className="py-2 m-2 text-left">
          <h2 className="text-base md:text-2xl font-black py-3">
            Author Notes
          </h2>
          <hr className="opacity-50 border-accent py-3" />
          <p className="pb-1">{authorsNotes}</p>
        </div>
        {/* Photo */}
        <PhotoCard photos={banners} />
        {/* DishTimes */}
        <div className="bg-primary px-6 mx-4 ">
          <div className="grid col-span-2 grid-flow-col">
            {timeToPrep && (
              <div>
                <h2 className="font-bold ">Prep-Time</h2>
                <p className="text-primary-content cursor-pointer">{timeToPrep} hrs</p>
              </div>
            )}
            <div>
              <h2 className="font-bold ">Cook-Time</h2>
              <p className="text-primary-content cursor-pointer">{timeToCook} mins</p>
            </div>
          </div>
            <hr className="opacity-50 border-accent" />
          <div>
            <h2 className="font-bold ">Serves</h2>
            <p className="text-primary-content cursor-pointer">{serves}</p>
          </div>
        </div>
        {/* Method Block */}
        <div className="text-left m-4">
          <div className="flex flex-col py-3 ">
            <span className="text-base md:text-2xl font-black py-3">
              Ingredients
            </span>
            <hr className="opacity-50 border-accent py-3" />
            <ul className="grid-cols-1 md:grid-cols-2 grid-flow-row grid">
              {ingredients.map((ingredient, i) => (
                <li
                  className="py-1 accent-accent"
                  key={ingredient + i}
                >
                  {/* <input type="checkbox" /> */}
                  <Checkbox text={ingredient} id={i} />
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3">
            <h2 className="text-base md:text-2xl font-black py-3">
              Directions
            </h2>
            <hr className="opacity-50 border-accent py-3" />
            <RichText className="text-gray-300" content={procedure} />
          </div>
        </div>
      </RecipeDetail>
    </section>
  );
}
