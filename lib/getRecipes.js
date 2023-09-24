import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({search, byMeal, byDietary, byMethod, byProtein }) => {
  console.log("searchparams___________")
  console.log(search)



  try {
    const { items } = await client.getEntries({
      content_type: 'recipe',
      // 'fields. ': ,

    });
    // console.log("items___________")
    // console.log(items)

    // const skip = (page - 1) * limit;
    // if (query) {
    //   pipeline.unshift({
    //     $search: {
    //       index: 'search',
    //       text: {
    //         query,
    //         fuzzy: {
    //           maxEdits: 1,
    //           prefixLength: 3,
    //           maxExpansions: 50
    //         },
    //         path: {
    //           wildcard: '*'
    //         }
    //       }
    //     }
    //   })
    // }
    // await sleep(1000);
    return items
  } catch (error) {
    return console.log(error);
  }
};
// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
