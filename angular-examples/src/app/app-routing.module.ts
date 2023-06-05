import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { DialogComponent } from './pages/dialog/dialog.component';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path: "home", component:HomeComponent 
  },
  {
    path: "datepicker", component:DatepickerComponent 
  },
  {
    path: "button", component:ButtonComponent 
  },
  {
    path: "button-toggle", component:ButtonToggleComponent 
  },
  {
    path: "chips", component:ChipsComponent 
  }
  ,
  {
    path: "dialog", component:DialogComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
