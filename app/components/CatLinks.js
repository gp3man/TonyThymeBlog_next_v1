import Link from "next/link";
import Image from "next/image";
const CatCircles = ({ categories }) => {
  return (
    <div className="flex flex-wrap w-full justify-evenly sm:-space-x-32 text-center pb-3 my-3 shadow-md">
      {categories.map((cat, i) => (
        <Link key={i} href={`/categories/${cat?.sys?.id}`}>
          <div className="flex flex-col min-w-[85px] ">
            <Image
              alt={cat?.title}
              src={cat?.thumbnail?.url}
              width={cat?.thumbnail?.width}
              height={cat?.thumbnail?.height}
              sizes="(min-width: 640px) 60px, 30px"
              className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full self-center"
            />
            <p className="">{cat?.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatCircles;
