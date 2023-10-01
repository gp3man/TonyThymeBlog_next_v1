import { client } from "./contentful";
/// Movies ///

export const getRecipes = async ({
  search,
  byMeal,
  byDietary,
  byMethod,
  byProtein,
}) => {
  // console.log("searchparams___________")
  // console.log(search)

  try {
    if (search) {
      const { items } = await client.getEntries({
        content_type: "recipe",
        query: `${search}`,
      });
      return items;
    }

    const { items } = await client.getEntries({
      content_type: "recipe",
    });
    // console.log("items___________")
    // console.log(items)

    return items;
  } catch (error) {
    return console.log(error);
  }
};
export const filterMealData = () => {
  return [
    "Appetizers",
    "Breakfast",
    "Condiments",
    "Desserts",
    "Drinks & Smoothies",
    "Lunch & Dinner",
    "Salads & Sides",
    "Snacks",
    "Soups & Chilis",
  ];
};
export const filterDietaryData = () => {
  return [
    "Dairy-Free",
    "Egg-Free",
    "Gluten-free",
    "Grain-Free",
    "Nut-free",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Whole30",
  ];
};

export const filterMethodData = () => {
  return [
    "Air Fryer",
    "Blender",
    "Grill",
    "Instant Pot",
    "Meal Prep Recipes",
    "No-Bake",
    "Oven",
    "Slow Cooker",
    "Smoker",
    "Stovetop",
  ];
};

export const filterProteinData = () => {
  return [
    "Beef",
    "Chicken",
    "Eggs",
    "Fish & Seafood",
    "Meatless",
    "Pork",
    "Turkey",
  ];
};
