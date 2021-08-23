import React from "react";
import Ingredient from "./Ingredient";

export default function IngredienList({ ingredients }) {
  const ingridientElemetns = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return <div className="ingredient-grid">{ingridientElemetns}</div>;
}
