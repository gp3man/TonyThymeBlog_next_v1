import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({search, byMeal, byDietary, byMethod, byProtein }) => {
  console.log("searchparams___________")
  console.log(search)



  try {
    if(search){
      const { items } = await client.getEntries({
        content_type: 'recipe',
        "query": `${search}`,
      });
      return items
    }

    const { items } = await client.getEntries({
      content_type: 'recipe',
    });
    // console.log("items___________")
    // console.log(items)

    return items
  } catch (error) {
    return console.log(error);
  }
};
// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
