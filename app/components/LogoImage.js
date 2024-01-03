// "use client";
import Image from "next/image";
// const nextImageLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };
// loader={nextImageLoader}
const LogoImage = (props) => {
  return <Image alt={props.alt}  priority={true} width={128} sizes="128px" {...props} />;
};
export default LogoImage;
