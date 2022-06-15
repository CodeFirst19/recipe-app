import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<ingredient[]>()
    private ingredients: ingredient[] = [
        new ingredient('Apples', 5),
        new ingredient('Tomato', 10)
      ];

    addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient)
        this.ingredientChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientChanged.emit(this.ingredients.slice())
    }

    getIngredients(){
        return this.ingredients.slice()
    }
}