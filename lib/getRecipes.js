import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ( {params} ) => {




  try {
    const { items } = await client.getEntries({
      content_type: 'recipe',
      // 'fields. ': ,

    });
    console.log("params___________")
    console.log(params)
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