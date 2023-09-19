import { client } from "@/lib/contentful.js";
import { redirect } from "next/dist/server/api-utils";
import ContentfulImage from "../components/ContentfulImage";
import RecipeDetail from "../components/RecipeDetail";
// import RichText from "../components/RichText";
// import ContentfulImage from "../components/ContentfulImage";
// import Link from "next/link";

export default async function RecipePage({ params }) {
  const response = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  if (!response?.items?.length) {
    redirect("/");
  }
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
      <article className="flex-grow min-h-screen m-4 pt-16 pb-14 overflow-y-scroll scrollbar-hide">
        <RecipeDetail className="flex">
          <ContentfulImage
            className=""
            alt={title}
            src={banners?.[0]?.fields?.file?.url}
            width={banners?.[0]?.fields?.file?.details?.image?.width}
            height={banners?.[0]?.fields?.file?.details?.image?.height}
          />
          <div className="">
            Author:
            {recipeBy?.fields?.image?.fields && (
              <ContentfulImage
                className=""
                alt={recipeBy?.image?.fields?.title}
                src={recipeBy?.image?.fields?.file?.url}
                width={recipeBy?.image?.fields?.file?.details?.image?.width}
                height={recipeBy?.image?.fields?.file?.details?.image?.height}
              />
            )}
            <span> {recipeBy?.fields?.name}</span>
          </div>
          <div>
            <h1>{title}</h1>
            <h3>
              Author Notes: {authorsNotes} <hr />{" "}
            </h3>
            <span>Cook Time: {timeToCook} minutes</span>
            <span>Serves: {serves}</span>
            <ul className="flex flex-col ">
              <span className="text-bold">Ingredients</span>
              {ingredients.map((ingredient, i) => (
                <li id={ingredient + i}>
                  <input type="checkbox" /> {ingredient}
                </li>
              ))}
            </ul>
            {/* <RichText content={procedure} /> */}
          </div>
        </RecipeDetail>
      </article>
    </>
  );
}
