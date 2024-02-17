import Link from "next/link";
import Image from "next/image";
import { CgTimer } from "react-icons/cg";

const RecipeCard = ({ recipe }) => {
  const { title, timeToCook, thumbnail, serves, slug } = recipe;
  return (
    <Link
      className="p-0 rounded-lg  hoverglow m-3"
      href={`/recipes/${slug}`}
      aria-label={title}
    >
      <div className="max-w-sm bg-secondary border border-accent rounded-lg shadow ">
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
            className="aspect-[4/6] rounded-t-lg shadow-2xl"
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-md font-bold tracking-tight text-secondary-content truncate">
              {title}
            </h5>
          </div>
          <div className="flex justify-between mx-3">
            {/* <div className="inline-flex content-between items-center px-4 py-2 text-sm  rounded-lg"> */}
              <div className="inline-flex p-1 px-2 font-medium text-center text-secondary-content bg-accent rounded-lg shadow-xl">
                <CgTimer size={22} className="pr-1" /> {timeToCook} mins
              </div>
              <div className="self-center p-1 px-2 font-medium text-center text-primary-content bg-primary rounded-lg shadow-xl">
                <p className="self-center">
                  Serves {serves}
                </p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
