import { client } from "./contentful";
/// Movies ///
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
export const getLanding = async () => {
  const query = `query {
    landingPageContentCollection(limit: 1, where: {active: true}) {
      items {
        hook
        context
        buttonText
        backgroundImage {
          title
          url
          width
          height
        }
      }
    }
    recipeCollection(where: {featured: true}) {
      items {
        title
        timeToCook
        authorsNotes
        serves
        ingredients
        slug
        thumbnail {
          title
          title
          url
          width
          height
        }
        procedure {
          json
        }
      }
    }
    announcementCollection(limit: 1, where: {active: true}) {
      items {
        headline
        details
        dateOfEvent
        thumbnail {
          title
          url
          width
          height
        }
        location {
          lat
          lon
        }
      }
    }
  }`;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).catch(err => console.log("ERROR: " + err));
  const {data} = await res.json()
  return data
};
export const getRecipesG = async ({ page, limit, search }) => {
  const skip = (page - 1) * limit;
  const deep = typeof search === String ? true : false
  const query = `query ($limit: Int, $search: String, $skip: Int, $deep: Boolean!) {
    categoryCollection(limit: 6, where: {showCategory: true}) {
      items {
        title
        slug
        thumbnail {
          url
          width
          height
        }
      }
    }
    recipeCollection(skip: $skip, limit: $limit) {
      items {
        ...recipeFields
      }
    }
    searchedCollection: recipeCollection(
      skip: $skip
      limit: $limit
      where: {title_contains: $search}
    ) @include(if: $deep) {
      items {
        ...recipeFields
      }
    }
  }

  fragment recipeFields on Recipe {
    title
    timeToCook
    authorsNotes
    serves
    ingredients
    thumbnail {
      title
      title
      url
      width
      height
    }
    procedure {
      json
    }
  }`;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables:{skip, limit, search, deep} }),
    }
  ).catch(err => Error(err));
  const {data} = await res.json()
  return data
};


export const getRecipes = async ({ page, limit, query }) => {
  const skip = (page - 1) * limit;
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

export const getCategories = async ({ view }) => {
  if (!(view === false) || !(view === true)) {
    view = undefined;
  }
  try {
    const { items } = await client.getEntries({
      content_type: "category",
      "fields.showCategory": view,
    });

    return items;
  } catch (error) {
    return console.log(error);
  }
};

export const getCategory = async ({ slug }) => {
  try {
    const { items } = await client.getEntries({
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
