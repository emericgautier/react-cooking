import React from "react";

const Meals = ({ meal }) => {
  return (
    <div className="meal">
      <h2>Title</h2>
      <p>Subtitle</p>
      <img
        src="	https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
        alt="Photo title"
      />
      <p>Receipt</p>
    </div>
  );
};

export default Meals;
