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
    recipeCollection(limit: 12, where: {featured: true}) {
      items {
        title
        timeToCook
        serves
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
  ).catch((err) => console.log("ERROR: " + err));
  const { data } = await res.json();
  return data;
};
export const getRecipes = async ({ page, limit = 4, search }) => {
  const skip = (page - 1) * limit;
  const query = `query ($limit: Int, $search: String, $skip: Int) {
    categoryCollection(limit: 5, where: {showCategory: true}) {
      items {
        sys{
          id
        }
        title
        slug
        thumbnail {
          url
          width
          height
        }
      }
    }
    recipeCollection(
      skip: $skip
      limit: $limit
      where: { OR:[{title_contains: $search}, {contentfulMetadata:{tags:{id_contains_some: [$search]}}}, {procedure_contains: $search}, {ingredients_contains_some: [$search]}]}
    ) {
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
  }`;
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { skip, limit, search } }),
    }
  ).catch((err) => Error(err));
  const { data } = await res.json();
  return data;
};
export const getCategories = async () => {
  const query = `query {
    categoryCollection(limit: 20) {
      items {
        sys{
          id
        }
        title
        slug
        thumbnail {
          url
          width
          height
        }
      }
    }
  }
`;
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
  ).catch((err) => Error(err));
  const { data } = await res.json();
  return data;
};

export const getCategory = async ({ slug }) => {
  const query = `query ($slug: String!) {
    category(id: $slug) {
      title
      slug
      thumbnail {
        url
        width
        height
      }
      linkedFrom {
        recipeCollection {
          items {
            title
            timeToCook
            serves
            slug
            thumbnail {
              title
              title
              url
              width
              height
            }
          }
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
      body: JSON.stringify({ query, variables: { slug } }),
    }
  ).catch((err) => Error(err));
  const { data } = await res.json();
  return data;
};
// export const getBio = async () => {
//   const query = `query {
//     aboutMePageCollection {
//       items {
//         bio
//         missionStatement
//         bioPicture {
//           title
//           url
//           width
//           height
//         }
//         supplementPicturesCollection {
//           items {
//             title
//             url
//             width
//             height
//           }
//         }
//       }
//     }
//   }`;
//   const res = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
//       },
//       body: JSON.stringify({ query }),
//     }
//   ).catch((err) => console.log("ERROR: " + err));
//   const { data } = await res.json();
//   return data;
// };