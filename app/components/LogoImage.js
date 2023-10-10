"use client";
import Image from "next/image";
const nextImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const LogoImage = (props) => {
  return <Image alt={props.alt} loader={nextImageLoader} priority={true} {...props} />;
};
export default LogoImage;
