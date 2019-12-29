import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';
import { routes } from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //make use of the routes we defined in routes.ts
  ],
  exports: [
    RouterModule
  ] //make RouterModule avaliable for our App Module
})
export class AppRoutingModule { }
