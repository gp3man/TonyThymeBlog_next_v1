import { client, previewClient } from "@/lib/contentful.js";
// import { redirect } from "next/dist/server/api-utils";
import ContentfulImage from "../components/ContentfulImage";
import RecipeDetail from "../components/RecipeDetail";
import RichText from "../components/RichText";
import Link from "next/link";
import PhotoCard from "../components/PhotoCard";

export default async function RecipePage({ params, preview = false }) {
  const currentClient = preview ? previewClient : client;
  const response = await currentClient.getEntries({
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
  } = recipe?.fields;
  return (
    <>
      <section className="flex min-h-screen m-4 pt-16 pb-14 overflow-y-scroll scrollbar-hide justify-center">
        {preview && (
          <>
            You're in preview mode!!!
            <Link href="/api/exit-preview">Exit preview</Link>
          </>
        )}
        <RecipeDetail className="flex flex-col justify-center">
          <header>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div>
              <p className="text-sm font-thin">
                By:
                <span> {recipeBy?.fields?.name}</span>
              </p>
              {recipeBy?.fields?.image?.fields && (
                <ContentfulImage
                  alt={recipeBy?.image?.fields?.title}
                  src={recipeBy?.image?.fields?.file?.url}
                  width={recipeBy?.image?.fields?.file?.details?.image?.width}
                  height={recipeBy?.image?.fields?.file?.details?.image?.height}
                  className="w-[20] h-[20] rounded-full"
                />
              )}
            </div>
          </header>
          <PhotoCard photos={banners} />
          {/* DishTimes */}
          <div className="DishTimes">
            <div>
              <h2>Cook Time</h2>
              <p>{timeToCook}</p>
            </div>
            <div>
              <h2>Serves</h2>
              <p>{serves}</p>
            </div>
          </div>
          {/* Notes */}
          <div className="Notes">
            <h2>Author Notes</h2>
            <p>
              {authorsNotes} <hr />
            </p>
          </div>
          {/* Method Block */}
          <div className="Method">
            <div>
              <ul className="flex flex-col ">
                <span className="text-bold">Ingredients</span>
                {ingredients.map((ingredient, i) => (
                  <li key={ingredient + i}>
                    <input type="checkbox" /> {ingredient}
                  </li>
                ))}
                <hr />
              </ul>
            </div>
            <div>
              <h2>Directions</h2>
              <RichText content={procedure} />
            </div>
          </div>
        </RecipeDetail>
      </section>
    </>
  );
}
