import { EventEmitter, Injectable } from "@angular/core";
import { ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  public recipeSelected = new EventEmitter<Recipe>()
  private recipes:Recipe[] = [
    new Recipe('Fried Chicken', 'Lick your lips after our chicken strips', 'https://i.ytimg.com/vi/hViEZ9zz83E/maxresdefault.jpg', 
    [
      new ingredient("Meat", 2),
      new ingredient("Chicken Spice", 1)
    ]),
    new Recipe('Fried Chicken', 'Lick your lips after our chicken strips', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiHel0qy3iBV0nA3qWmm0Lg_KTd9R33nsGw&usqp=CAU', 
    [
      new ingredient("Meat", 1),
      new ingredient("Veggies", 2)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientToShoppingList(ingredients: ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}