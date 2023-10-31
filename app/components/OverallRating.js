const OverallRating = async({recipeId}) => {
  console.log(recipeId: recipeId)
  const getOverall = async ({ recipeId, userEmail }) => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}api/overall-rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeId: recipeId,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      // return error
      console.log(error);
    }
  };
  const data = getOverall({recipeId})
  console.log(data: data)
  return ( <div>
    OverallRating
  </div> );
}

export default OverallRating;
