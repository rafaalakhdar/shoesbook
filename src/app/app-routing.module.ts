import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoeDetailComponent} from './shoe-detail/shoe-detail.component';
import {ShoeComponent} from './shoe/shoe.component';
import {AddShoeComponent} from './add-shoe/add-shoe.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [{path: 'shoe/:id', component: ShoeDetailComponent},
  {path: 'shoeList', component: ShoeComponent},
  {path: 'AddShoe', component: AddShoeComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Home', component: HomeComponent},
  {path: '', redirectTo: '/Home', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
