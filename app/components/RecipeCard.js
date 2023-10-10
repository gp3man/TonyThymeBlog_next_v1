import Link from "next/link";
import Image from "next/image";
import { CgTimer } from "react-icons/cg";

const RecipeCard = ({ recipe }) => {
  const { title, timeToCook, thumbnail, serves, slug } = recipe;
  return (
    <Link
      className="p-2 md:w-1/4 md:h-1/4"
      href={`/recipes/${slug}`}
      aria-label={title}
    >
      <div className="max-w-sm bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
        <div className="aspect-video">
          <Image
            src={thumbnail?.url}
            width={thumbnail?.width}
            height={thumbnail?.height}
            quality="100"
            alt={title}
            className="aspect-video rounded-lg"
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-md font-bold tracking-tight text-stone-900 dark:text-white truncate">
              {title}
            </h5>
          </div>
          <div className="grid grid-flow-row grid-cols-2">
            <p className="font-normal text-stone-700 dark:text-stone-400">
              Serves {serves}
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 col-start-2">
              <CgTimer size={20} className="pr-1" /> {timeToCook}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
