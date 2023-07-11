import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Steak Meat'
            , 'This is Steak recipe'
            , 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('Steak Meat', 1), new Ingredient('Salad', 10)]),
        new Recipe('Second Test Recipe'
            , 'This is the second test recipe'
            , 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/27/DV2907_Bacon-Cheese-Burgers-and-Chili-Cheese-Fries_s4x3.jpg.rend.hgtvcom.616.462.suffix/1543329866171.jpeg',
            [new Ingredient('Burger', 1), new Ingredient(' cheeder Fries', 10), new Ingredient('Buns', 2)]
        )
    ];
    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    selectRecipe() {
        this.recipeSelected.emit();
    }
    addIngredientstoShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }

}