import { Injectable } from '@angular/core';
import { Meal } from './meal'
@Injectable({
  providedIn: 'root'
})
export class MealServerService {

  constructor() { }
  meals = [
    {name:'Fish', description: 'Tilapia', calories:20  },
    {name:'Fish', description: 'Tilapia', calories:20}

  ];
  addMeal(){
    return "Kudos! added meals successfuly"
  }
  getMeal(){
    return this.meals
  }
}
