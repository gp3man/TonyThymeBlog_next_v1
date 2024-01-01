import { client } from "@/lib/contentful.js";
import RichText from "../../components/RichText";
import LogoImage from "@/app/components/LogoImage";
import PhotoCard from "../../components/PhotoCard";
import Checkbox from "@/app/components/CheckBox";
import ReviewBoard from "@/app/components/ReviewBoard.js";
import NewReview from "@/app/components/form/NewReview";
import { authOptions } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import OverallRating from "@/app/components/OverallRating";
import InstagramVid from "@/app/components/InstagramVideo";
export default async function RecipePage({ params }) {

  const reviewCheck = async ({ recipeId, userEmail }) => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}api/post-check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          recipeId: recipeId,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const session = await getServerSession(authOptions);
  const response = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  const recipe = response?.items?.[0];
  const recipeId = recipe.sys.id;
  const userEmail = session?.user?.email;
  let formLock = false;
  if (session?.user) {
    const { lock, message } = await reviewCheck({ recipeId, userEmail });
    formLock = lock;
  }
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
    instagramVideo
  } = recipe?.fields;
  return (
    <section className="flex flex-col min-h-screen w-screen m-0 pt-20 justify-center text-center overflow-y-scroll scrollbar-hide">
      <header className="w-full px-4 md:px-32">
        <h1 className="text-lg md:text-4xl font-black text-base-content py-1">
          {title}
        </h1>
        <div className="flex flex-col justify-center ">
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
                  recipeBy?.fields?.image?.fields?.file?.details?.image?.height
                }
                className="w-[20px] h-[20px md:w-[40px] md:h-[40px] rounded-full left-1/2"
              />
            </div>
          )}
        </div>
        {/* Notes */}
      </header>
      <div className="w-full px-4 md:px-32">
        <div id="authorsNotes" className="py-2 text-left">
          <h2 className="text-base md:text-2xl font-black py-3">
            Author Notes
          </h2>
          <a className=" btn btn-ghost end-0 font-light text-xs" href="#method">Skip To Method</a>
          <hr className="opacity-50 border-accent py-3" />
          <p className="pb-1">{authorsNotes}</p>
        </div>
        {/* Photo */}
        <PhotoCard photos={banners} />
        {/* DishTimes */}
        <div id="dishTimes" className="bg-primary py-3 rounded-xl ">
          <div className="grid col-span-2 grid-flow-col">
            {(timeToPrep && timeToPrep > 0) && (
              <div className="p-2">
                <h2 className="font-bold ">Prep-Time</h2>
                <p className="text-primary-content cursor-pointer">
                  {timeToPrep} hrs
                </p>
              </div>
            )}
            <div className="p-2">
              <h2 className="font-bold ">Cook-Time</h2>
              <p className="text-primary-content cursor-pointer">
                {timeToCook} mins
              </p>
            </div>
          </div>
          <hr className="opacity-50 border-accent" />
          <div className="p-2">
            <h2 className="font-bold ">Serves</h2>
            <p className="text-primary-content cursor-pointer">{serves}</p>
          </div>
        </div>
        {/* Method Block */}
        <div id="method" className="text-left py-3">
          <div className="flex flex-col py-3 ">
            <span className="text-base md:text-2xl font-black py-3">
              Ingredients
            </span>
            <hr className="opacity-50 border-accent py-3" />
            <ul className="grid-cols-1 lg:grid-cols-2 grid-flow-row grid">
              {ingredients?.map((ingredient, i) => (
                <li className="py-1 accent-accent" key={ingredient + i}>
                  <Checkbox text={ingredient} id={i} />
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 flex-grow flex-col justify-center">
            <h2 className="text-base md:text-2xl font-black py-3">
              Directions
            </h2>
            <hr className="opacity-50 border-accent py-3" />
            {instagramVideo && (<div className="flex justify-center rounded-lg"><InstagramVid vid={instagramVideo} ></InstagramVid> </div>  )}
            <RichText content={procedure} />
          </div>
        </div>
        <div className="text-left py-3 text-base-content">
          {/* <div className="flex"> */}
            <OverallRating recipeId={recipeId} />
            <NewReview recipeId={recipeId} formLock={formLock} />
          {/* </div> */}
          <ReviewBoard recipeId={recipeId} reader={session?.user} />
        </div>
      </div>
    </section>
  );
}
{
  /* {preview && (
  <>
    You're in preview mode!!!
    <Link href="/api/exit-preview">Exit preview</Link>
  </>
)} */
}
