import { Component, OnInit, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef : ElementRef

  //@Output() ingredientAdded = new EventEmitter<ingredient>()

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(newIngredient)
  }

}
