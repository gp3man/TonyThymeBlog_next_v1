"use client";
import Image from "next/image";
const nextImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const RecipeImage = (props) => {
  return <Image alt={props.alt}  priority={true} width={128} loader={nextImageLoader} sizes="(min-width: 780px) 40px, 20px" {...props} />;
};
export default RecipeImage;
