const reviewCheck = async({recipeId, userEmail}) => {
  const res = await fetch("/api/review/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: userEmail,
      recipeId: recipeId,
    }),
  });
  return res;
}

export default reviewCheck;

