import Link from "next/link";
import ContentfulImage from "./ContentfulImage";
import { CgTimer } from "react-icons/cg";

const RecipeCard = ({ recipe }) => {
  const { title, timeToCook, thumbnail, serves, slug } = recipe?.fields;
  return (
    <Link className="p-2" href={`${slug}`} aria-label={title}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ContentfulImage
          src={thumbnail?.fields?.file?.url}
          width={thumbnail?.fields?.file?.details?.image?.width}
          height={thumbnail?.fields?.file?.details?.image?.height}
          quality="100"
          alt={title}
        />
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Serves {serves}
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <CgTimer className="pr-1" /> {timeToCook}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
