import Link from "next/link";
import Image from "next/image";
const CatCircles = ({ categories }) => {
  return (
    <div className="flex justify-evenly sm:-space-x-32 text-center my-2">
      {categories.map((cat, i) => (
        <Link href={`/recipes/category/${cat?.fields?.slug}`}>
          <div key={i}>
            <Image
              alt={cat?.fields?.thumbnail?.fields?.title}
              src={cat?.fields?.thumbnail?.fields?.file?.url}
              width={
                cat?.fields?.thumbnail?.fields?.file?.details?.image?.width
              }
              height={
                cat?.fields?.thumbnail?.fields?.file?.details?.image?.height
              }
              className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full"
            />
            <p>{cat.fields.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatCircles;
