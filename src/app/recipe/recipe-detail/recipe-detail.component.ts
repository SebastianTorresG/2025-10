import { Component, Input, OnInit } from '@angular/core';
import { RecipeDetail } from '../recipe-detail';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  @Input() recipeDetail!: RecipeDetail;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  getRecipe(){
    this.recipeService.getRecipe(this.recipeId).subscribe(apiData => {
      this.recipeDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.recipeDetail === undefined){
      this.recipeId = this.route.snapshot.paramMap.get('id')!
      if(this.recipeId){
        this.getRecipe();
      }
    }
  }

}
