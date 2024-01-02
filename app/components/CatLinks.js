import Link from "next/link";
import Image from "next/image";
const CatCircles = ({ categories }) => {
  return (
    <div className="flex justify-evenly sm:-space-x-32 text-center my-2">
      {categories.map((cat, i) => (
        <Link key={i} href={`/categories/${cat?.sys?.id}`}>
          <div>
            <Image
              alt={cat?.title}
              src={cat?.thumbnail?.url}
              width={
                cat?.thumbnail?.width
              }
              height={
                cat?.thumbnail?.height
              }
              className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full" 
            />
            <p>{cat?.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatCircles;
