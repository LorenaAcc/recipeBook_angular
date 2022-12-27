import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

//Since we will inject a service into a service (we will inject Http Service), we need to add @Injectable
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService){}

    storeRecipies(){
        const recipes = this.recipeService.getRecipes();
        this.http
            .put('https://restserver-lore.onrender.com/api/recipes/save', recipes)
            .subscribe(response => { console.log(response); });
    }
    
    fetchRecipes(){
        return this.http
            .get<Recipe[]>('https://restserver-lore.onrender.com/api/recipes/fetch')
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                }); 
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}