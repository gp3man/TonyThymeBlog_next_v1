import { previewClient } from "@/lib/contentful";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }
  const recipe = await getPreviewPostBySlug(slug);
  if (!recipe) {
    return new Response("Invalid slug", { status: 404 });
  }
  const url = `/recipes/${recipe.fields.slug}`;
  draftMode().enable();
  return redirect(url);
}
function extractPost(fetchResponse) {
  return fetchResponse?.items?.[0];
}
async function getPreviewPostBySlug(slug) {
  const NextResponse = await previewClient.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });
  return extractPost(NextResponse);
}
