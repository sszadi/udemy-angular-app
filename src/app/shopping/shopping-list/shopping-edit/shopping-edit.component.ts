import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingService} from '../../shopping.service';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppingService.addIngredient(new Ingredient("test", 5));
  }

}
