import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({
  query,
  page,
  limit,
  byMeal,
  byDietary,
  byMethod,
  byProtein,
}) => {
  // console.log("searchparams___________")
  // console.log(search)
const skip = (page - 1) * limit
  try {
    if (query) {
      const { items } = await client.getEntries({
        content_type: "recipe",
        skip: skip,
        limit: limit,
        query: `${query}`,
      });
      return items;
    }

    const { items } = await client.getEntries({
      content_type: "recipe",
      skip: skip,
      limit: limit,
    });


    // console.log("items___________")
    // console.log(items)

    return items;
  } catch (error) {
    return console.log(error);
  }
};
