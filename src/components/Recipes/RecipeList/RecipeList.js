import React from 'react';
import Recipe from '../Recipe/Recipe';
import recipes from '../../../data/recipes.json';

export default class RecipeList extends React.Component {
    render() {
        return (
            <div className="recipe-list p-3">
                <h1>Rezepte</h1>
                <div className="d-flex">
                    {
                        recipes.map((recipe) =>
                            <Recipe key={`Recipe_${recipe.id}`} data={recipe}></Recipe>
                        )
                    }
                </div>
            </div>
        );
    }
}