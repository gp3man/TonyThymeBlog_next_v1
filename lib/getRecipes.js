import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({
  search,
  page,
  limit,
  byMeal,
  byDietary,
  byMethod,
  byProtein,
}) => {
  const pg = typeof page === "string" ? Number(page) : 1;
  const lm = typeof limit === "string" ? Number(limit) : 12;
  // console.log("searchparams___________")
  // console.log(search)
const skip = (pg - 1) * lm
  try {
    if (search) {
      const { items } = await client.getEntries({
        content_type: "recipe",
        skip: skip,
        limit: lm,
        query: `${search}`,
      });
      return items;
    }

    const { items } = await client.getEntries({
      content_type: "recipe",
      skip: skip,
      limit: lm,
    });

    
    // console.log("items___________")
    // console.log(items)

    return items;
  } catch (error) {
    return console.log(error);
  }
};
