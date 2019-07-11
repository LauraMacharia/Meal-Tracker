import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Meal } from './meal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { FormMealComponent } from './form-meal/form-meal.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { CalPipePipe } from './cal-pipe.pipe';
import { MealServerService } from './meal-server.service'
@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    FormMealComponent,
    MealEditComponent,
    CalPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
