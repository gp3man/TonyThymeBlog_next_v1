import Link from "next/link";
import Image from "next/image";
const Hero = ({ content }) => {
  const {  title, headline, details, banner } = content;
  return (
    <section className=" bg-gradient-to-b  from-base-100 via-base-300 to-secondary p-6">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-secondary-content uppercase text-center">
            {title}
          </h1>
          <p className="text-pretty max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            {headline}
          </p>
          <div className="flex">
            <Link
              href="#events"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary-content rounded-lg bg-primary border-accent hover:ring-4 hover:ring-accent focus:ring-3 focus:ring-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M16 3l0 4" />
                <path d="M8 3l0 4" />
                <path d="M4 11l16 0" />
                <path d="M8 15h2v2h-2z" />
              </svg>
              See Tour
            </Link>
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center px-2 py-3 mr-3 text-base font-medium text-center text-secondary-content rounded-lg bg-secondary hover:ring-4 hover:ring-accent focus:ring-4 focus:ring-accent"
            >
              View Recipes
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <p className="max-w-2xl mb-2 pt-10 pr-10 font-ligh t text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
            {details}
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={banner?.url}
            height={banner?.height}
            width={banner?.width}
            className="rounded-lg"
            alt="hero_banner"
          />
        </div>
      </div>
      <div className="flex content-center w-full object-contain lg:hidden ">
      <Image
            src={banner?.url}
            height={banner?.height}
            width={banner?.width}
            blurDataURL={banner?.url}
            placeholder="blur"
            className="rounded-lg"
            alt="hero_banner"
          />
      </div>
    </section>
  );
};

export default Hero;
