import { previewClient } from "@/lib/contentful";

const handler = async (req, res) => {
  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const response = await previewClient.getEntries({
    content_type: "recipeCookbook",
    "fields.slug": slug,
  });

  const recipe = response?.items?.[0];

  if (!recipe) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});
  const url = `/${recipe.fields.slug}`;
  res.writeHead(307, { Location: url });
  res.end();
};

export default handler;
