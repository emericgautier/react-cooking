import React from "react";
import Meals from "./components/Meals";

const App = () => {
  return (
    <div className="container">
      <h1>React Cooking</h1>
      <input type="text" placeholder="Taper le nom d'un aliment" />
      <Meals />
    </div>
  );
};

export default App;
