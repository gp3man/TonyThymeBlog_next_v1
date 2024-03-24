"use server";
import { getRecipes, getNewsletter } from "@/lib/getRecipes";

export async function fetchRecipes({ page = 1, search }) {
  const data = await getRecipes({ search, page });
  return data;
}
export async function fetchNewsletter() {
  const data = await getNewsletter();
  return data;
}
