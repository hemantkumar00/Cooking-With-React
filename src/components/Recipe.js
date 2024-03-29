import { useContext } from "react";
import { RecipeContext } from "./App";
import IngredienList from "./IngredienList";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { name, cookTime, servings, instructions, ingredients, id } = props;

  //very usefull for subscription kind of things we can unmount as soon as the subscription get onver
  // useEffect(() => {
  //   console.log("Render");
  //   return () => {
  //     console.log("Unmount");
  //   };
  // }, []);

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => {
              handleRecipeSelect(id);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn--danger "
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients</span>
        <div className="recipe__value recipe__value--indented recipe__instructions">
          <IngredienList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
