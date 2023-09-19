import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

const RecipeCard = ({ recipe }) => {
  const { title, timeToCook, thumbnail, slug } = recipe?.fields;
  return (
    <Link className="w-[300px] h-[200px]" href={`${slug}`} aria-label={title}>
      <div className="w-40 h-40">
        <ContentfulImage
          src={thumbnail?.fields?.file?.url}
          width={thumbnail?.fields?.file?.details?.image?.width}
          height={thumbnail?.fields?.file?.details?.image?.height}
          quality="100"
          alt={title}
        />
        <p className="truncate">{title}</p>
        <span>Cook Time: {timeToCook} minutes</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
