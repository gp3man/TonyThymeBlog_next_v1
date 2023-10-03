import { getCategory } from "@/lib/getRecipes";

const SingleCategory = async ({params}) => {
//   const slug = params.slug
// const {items} = await getCategory({slug})
// console.log(items)
  return ( <div className=" flex-col text-center justify-center mt-16">
    {params.slug}
  </div> );
}

export default SingleCategory;
