import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({
  page,
  limit,
  query,
}) => {
  console.log(query)
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
    return items;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategories = async ({view}) => {
  if (!(view === false) || !(view === true)){
    view = undefined
  }
  try {
    const {items} = await client.getEntries({
      content_type: "category",
      "fields.showCategory": view,
    });

    return items;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategory = async ({slug}) => {
  try {
    const {items} = await client.getEntries({
      content_type: "category",
      // "include": "recipe",,
      "fields.slug": slug,
      include: 1,
    });
    return items;
  } catch (error) {
    return console.log(error);
  }
};
