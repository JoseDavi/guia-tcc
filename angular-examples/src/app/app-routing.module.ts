import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path: "home", component:HomeComponent 
  },
  {
    path: "datepicker", component:DatepickerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
