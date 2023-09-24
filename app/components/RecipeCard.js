import Link from "next/link";
import ContentfulImage from "./ContentfulImage";
import { CgTimer } from "react-icons/cg";

const RecipeCard = ({ recipe }) => {
  const { title, timeToCook, thumbnail, serves, slug } = recipe?.fields;
  return (
    <Link className="p-2" href={`/recipes/${slug}`} aria-label={title}>
      <div className="max-w-sm bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
        <ContentfulImage
          src={thumbnail?.fields?.file?.url}
          width={thumbnail?.fields?.file?.details?.image?.width}
          height={thumbnail?.fields?.file?.details?.image?.height}
          quality="100"
          alt={title}
        />
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-white truncate">
              {title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-stone-700 dark:text-stone-400">
            Serves {serves}
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            <CgTimer size={20} className="pr-1" /> {timeToCook}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
