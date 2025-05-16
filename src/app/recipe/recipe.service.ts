import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { RecipeDetail } from './recipe-detail';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl: string = environment.baseUrl + 'recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeDetail[]> {
    return this.http.get<RecipeDetail[]>("https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json")
  }

  getRecipe(id: string): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>("https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/1/recipe.json");
  }

  createRecipe(recipe: RecipeDetail): Observable<RecipeDetail> {
    return this.http.post<RecipeDetail>(this.apiUrl, recipe);
  }

  createIngredientRecipe(idRecipe: number, idIngredient: number) {
    return this.http.post(
      this.apiUrl + '/' + idRecipe + '/ingredient/' + idIngredient,
      undefined
    );
  }
}