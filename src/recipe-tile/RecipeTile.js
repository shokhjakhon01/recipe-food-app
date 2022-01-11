import React from "react";
import "./style.css";
function RecipeTile({ item }) {
  return (
    item["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <img
          className="recipeTitle__image"
          src={item["recipe"]["image"]}
          alt="iamg"
          onClick={() => window.open(item['recipe']['url'])}
        />
        <h5 className="recipeTitle__name">{item["recipe"]["label"]}</h5>
      </div>
    )
  );
}

export default RecipeTile;
