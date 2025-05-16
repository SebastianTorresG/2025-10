import { Ingredient } from '../ingredient/Ingredient';
import { Recipe } from './Recipe';

export class RecipeDetail extends Recipe {
  ingredients: Array<Ingredient> = [];

  constructor(
    id: number,
    nombre: string,
    porciones: number,
    pasos: string[],
    tiempo_minutos: number,
    dificultad: string,
    tipo: string,
    imagen: string,
    etiquetas: string[],
    ingredients: Ingredient[]
  ) {
    super(id, nombre, porciones, pasos, tiempo_minutos, dificultad, tipo,imagen,etiquetas,ingredients);
    this.ingredients = ingredients;
  }
}