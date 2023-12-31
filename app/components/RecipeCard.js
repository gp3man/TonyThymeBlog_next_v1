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
      <div className="max-w-sm bg-secondary border border-accent rounded-lg shadow">
        <div className="aspect-[4/6]">
          <Image
            loading="lazy"
            fetchPriority="high"
            // decoding="async"
            src={thumbnail?.url}
            width={thumbnail?.width}
            height={thumbnail?.height}
            quality="100"
            sizes="(min-width: 1700px) 382px, (min-width: 780px) 22.78vw, (min-width: 440px) 382px, calc(83.33vw + 32px)"
            alt={title}
            className="aspect-[4/6] rounded-lg w-full"
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-md font-bold tracking-tight text-secondary-content truncate">
              {title}
            </h5>
          </div>
          <div className="grid grid-flow-row grid-cols-2">
            <p className="font-normal text-primary-content">Serves {serves}</p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-secondary-content bg-accent rounded-lg hover:bg-accent-focus focus:ring-4 focus:outline-none focus:ring-accent-content col-start-2">
              <CgTimer size={20} className="pr-1" /> {timeToCook}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
