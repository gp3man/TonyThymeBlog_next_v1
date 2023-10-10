import Link from "next/link";
const Hero = ({content}) => {
  const {hook, buttonText, context, backgroundImage} = content
  return (
    <section style={{backgroundImage:`url(${backgroundImage?.url})`}} className={`min-h-screen bg-center bg-no-repeat bg-stone-400 bg-blend-multiply`}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {hook}
        </h1>
        <p className="mb-8 text-lg font-normal text-stone-300 lg:text-xl sm:px-16 lg:px-48">
          {context}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/recipes"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            {buttonText}
            <svg
              className="w-3.5 h-3.5 ml-2"
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
