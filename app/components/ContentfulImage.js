'use client'
import Image from "next/image";
const nextImageLoader = ({ src, width, quality}) =>{
  return `${src}?w=${width}&q=${quality || 75}`
}
const ContentfulImage = props =>{
  return <Image alt={props.alt} loader={nextImageLoader} {...props}/>
}
export default ContentfulImage
