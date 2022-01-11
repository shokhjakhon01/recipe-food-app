import { useState } from "react";
import Axios from "axios";
import "./App.css";
import RecipeTile from "./recipe-tile/RecipeTile";

function App() {
  const YOUR_APP_ID = "8bf32936";
  const YOUR_APP_KEY = "ff9ac393a84363d59fdc32458b2124a8";
  const [query, setQuery] = useState("");
  const [healthlabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;

  const getRecipeInfo = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit} >
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <select className="app__heathtLabels">
          <option value="vegan" onClick={() => setHealthLabel("vegan")}>
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => setHealthLabel("vegetarian")}
          >
            vegetarian
          </option>
          <option value="low-sugar" onClick={() => setHealthLabel("low-sugar")}>
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => setHealthLabel("dairy-free")}
          >
            dairy-free
          </option>
          <option
            value="immuno-supportive"
            onClick={() => setHealthLabel("immuno-supportive")}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => setHealthLabel("wheat-free")}
          >
            wheat-free
          </option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="recipeTile-div">
        {recipes.map(item=> {
          return(
            <RecipeTile item={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
