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

export const getCategories = async ({view}) => {
  if (!view === false || !view === true){
    view = undefined
  }
  try {
    const {items} = await client.getEntries({
      content_type: "category",
      "fields.showCategory[eq]": view,
    });

    return items;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategory = async ({slug}) => {
  try {
    const {items} = await client.getEntries({
      content_type: "recipe",
      "fields.categories.items": slug,
    });

    return items;
  } catch (error) {
    return console.log(error);
  }
};
