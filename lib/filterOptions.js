import { client } from "@/lib/contentful";

const filterData = async () => {
  const { items  } = await client.getEntries({ content_type: "byMeal" });

  console.log(items[0].fields);

  return items;
};

export default filterData;
