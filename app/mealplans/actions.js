"use server";
import { getPlans, getTableRecipe, getMealPlan } from "@/lib/getRecipes.js";

export async function fetchMealPlans(page) {
  const data = await getPlans({ page });
  return data;
}
export async function fetchMealPlan(planId) {
  const data = await getMealPlan({ planId });
  return data;
}
export async function fetchTableRecipe(recipeId) {
  const data = await getTableRecipe({ recipeId });
  return data;
}