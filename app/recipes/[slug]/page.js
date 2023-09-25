import { client, previewClient } from "@/lib/contentful.js";
// import { redirect } from "next/dist/server/api-utils";
import ContentfulImage from "../../components/ContentfulImage";
import RecipeDetail from "../../components/RecipeDetail";
import RichText from "../../components/RichText";
import Link from "next/link";
import PhotoCard from "../../components/PhotoCard";

export default async function RecipePage({ params, preview = false }) {
  const currentClient = preview ? previewClient : client;
  const response = await currentClient.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  console.log(params.slug)
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
  } = recipe?.fields;
  return (
    <section className="flex min-h-screen m-4 pt-16 pb-14 overflow-y-scroll scrollbar-hide justify-center">
      {preview && (
        <>
          You're in preview mode!!!
          <Link href="/api/exit-preview">Exit preview</Link>
        </>
      )}
      <RecipeDetail>
        <header>
          <h1 className="md:text-3xl font-bold py-1">{title}</h1>
          <div className="flex flex-col justify-center content-center">
            <p className="text-sm font-thin text-gray-400 ">
              By:
              <span className=""> {recipeBy?.fields?.name}</span>
              </p>
              {recipeBy?.fields?.image && (
                <div className="flex justify-center pb-4">
                  <ContentfulImage
                    alt={recipeBy?.fields?.image?.fields?.title}
                    src={recipeBy?.fields?.image?.fields?.file?.url}
                    width={
                      recipeBy?.fields?.image?.fields?.file?.details?.image
                        ?.width
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
        </header>
        <div className="py-2 m-2 text-left">
          <h2 className="font-bold py-3 text-lg">Author Notes</h2>
          <hr className="opacity-50 border-orange-800 py-3" />
          <p className="pb-1 text-gray-300">{authorsNotes}</p>
        </div>
        {/* Photo */}
        <PhotoCard photos={banners} />
        {/* DishTimes */}
        <div className="bg-orange-900 px-6 mx-4 ">
          <div>
            <h2 className="font-bold ">Cook Time</h2>
            <p className="text-gray-300">{timeToCook}</p>
          </div>
          <div>
            <hr className="opacity-5" />
            <h2 className="font-bold ">Serves</h2>
            <p className="text-gray-300">{serves}</p>
          </div>
        </div>
        {/* Notes */}
        {/* Method Block */}
        <div className="text-left m-4">
          <div>
            <ul className="flex flex-col py-3 ">
              <span className="font-bold py-3 text-lg">Ingredients</span>
              <hr className="opacity-50 border-orange-800 py-3" />
              {ingredients.map((ingredient, i) => (
                <li className="py-1 text-gray-300" key={ingredient + i}>
                  <input type="checkbox" /> {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3">
            <h2 className="font-bold py-3 text-lg">Directions</h2>
            <hr className="opacity-50 border-orange-800 py-3" />
            <RichText className="text-gray-300" content={procedure} />
          </div>
        </div>
      </RecipeDetail>
    </section>
  );
}
