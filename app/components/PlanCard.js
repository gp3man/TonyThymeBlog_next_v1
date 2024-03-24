import Image from "next/image";
import Link from "next/link";
const PlanCard = ({ plan }) => {
  const { planName, summary, mealPlanThumbnail, sys, recipesInPlanCollection } =
    plan;
  const recipeItmTotal = recipesInPlanCollection.items.length;
  return (
    <Link
      className="p-0 rounded-lg hoverglow m-3 relative"
      href={`/mealplans/${sys?.id}`}
      aria-label={planName}
    >
      <div className="max-w-sm bg-accent border border-gray-200 rounded-lg shadow">
        <div className="w-full h-auto">
          <Image
            loading="lazy"
            fetchPriority="high"
            src={mealPlanThumbnail?.url}
            width={mealPlanThumbnail?.width}
            height={mealPlanThumbnail?.height}
            quality="100"
            alt={planName}
            className=" rounded-t-lg shadow-2xl"
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {planName}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 ">{summary}</p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-content bg-blue-70">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2">
          {recipeItmTotal}
        </div>
      </div>
    </Link>
  );
};

export default PlanCard;
