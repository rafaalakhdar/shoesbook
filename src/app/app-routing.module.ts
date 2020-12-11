import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoeDetailComponent} from './shoe-detail/shoe-detail.component';
import {ShoeComponent} from './shoe/shoe.component';
import {AddShoeComponent} from './add-shoe/add-shoe.component';


const routes: Routes = [{path: 'shoe/:id', component: ShoeDetailComponent},
  {path: 'shoeList', component: ShoeComponent},
  {path: 'AddShoe', component: AddShoeComponent},
  {path: '', redirectTo: '/shoeList', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
