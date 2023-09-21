import { previewClient } from "@/lib/contentful";

export default async function preview (req,res) {
  const { secret, slug } = req?.searchParams
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res?.status(401).json({ message: "Invalid token" });
  }
  const response = await previewClient.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });
  const recipe = response?.items?.[0];
  if (!recipe) {
    return res?.status(401).json({ message: "Invalid slug" });
  }
  res?.setPreviewData({});
  const url = `/${recipe.fields.slug}`;
  res?.setHeader('Location',url)
  return res?.status(307).end();
};
