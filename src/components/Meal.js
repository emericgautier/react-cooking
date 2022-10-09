import React from "react";

const Meals = ({ meal }) => {
  return (
    <div className="meal">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"Photo " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Meals;
