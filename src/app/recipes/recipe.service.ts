import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChange = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple recipe',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg', [
        new Ingredient('Egg', 2), new Ingredient('Cheese', 1)
      ]),
    new Recipe('Second recipe', 'Omnomnom',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg', []),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());

  }

  constructor(private shoppingService: ShoppingService) {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}
