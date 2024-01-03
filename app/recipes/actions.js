"use server";
import { getRecipes } from "@/lib/getRecipes";

export async function fetchRecipes({ page = 1, search }) {
  const data  = await getRecipes({  search, page });
  return data;
}
