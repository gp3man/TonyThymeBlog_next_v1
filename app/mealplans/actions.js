"use server";
import { getPlans } from "@/lib/getRecipes.js";

export async function fetchMealPlans(page) {
  const data = await getPlans({ page });
  return data;
}
