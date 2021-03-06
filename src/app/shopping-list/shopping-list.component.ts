import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/Ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = []
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }
}
