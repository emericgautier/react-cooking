import axios from "axios";
import React, { useEffect, useState } from "react";
import Meals from "./components/Meal";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);
  return (
    <div className="container">
      <h1>React Cooking</h1>
      <input
        type="text"
        placeholder="Taper le nom d'un aliment"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals">
        {mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Meals key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
