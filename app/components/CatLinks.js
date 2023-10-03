import ContentfulImage from "./ContentfulImage";
const CatCircles = ({ categories }) => {
  return (
    <div className="flex justify-evenly sm:-space-x-32 text-center my-2">
      {categories.map((cat, i) => (
        <div key={i}>
          <ContentfulImage
            alt={cat?.fields?.thumbnail?.fields?.title}
            src={cat?.fields?.thumbnail?.fields?.file?.url}
            width={cat?.fields?.thumbnail?.fields?.file?.details?.image?.width}
            height={
              cat?.fields?.thumbnail?.fields?.file?.details?.image?.height
            }
            className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full"
          />
          <p>{cat.fields.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CatCircles;
