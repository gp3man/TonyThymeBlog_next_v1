import { getCategory } from "@/lib/getRecipes";
import Image from "next/image";
import Link from "next/link";
const SingleCategory = async ({ params }) => {
  const slug = params.slug;
  const data = await getCategory({ slug });
  const category = data?.category;
  const recipes = data?.category?.linkedFrom?.recipeCollection?.items;
  return (
    <div className=" flex-col text-center justify-center mt-16 p-9 min-h-screen">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-6">
          {category?.title}
        </h1>
        <ul className="flex-col  divide-y divide-primary justify-center w-full px-2 md:px-24 ">
          {recipes?.length ? (
            <div>
              {recipes?.map((recipe, i) => (
                <li
                  className="py-3 sm:py-4 shadow-lg px-2 justify-center align-middle"
                  key={i}
                >
                  <Link
                    className="flex items-center space-x-4 rtl:space-x-reverse"
                    href={`/recipes/${recipe?.slug}`}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="w-20 h-20 rounded-full"
                        src={recipe?.thumbnail?.url}
                        sizes="80px"
                        width={recipe?.thumbnail?.width}
                        height={recipe?.thumbnail?.height}
                        alt={recipe?.title}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {recipe?.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        <span>Serves </span> {recipe?.serves}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      {recipe?.timeToCook} min
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          ) : (
            <div className="text">Nothing Here</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SingleCategory;
