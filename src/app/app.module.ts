import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import {FormsModule} from '@angular/forms';
import { AddShoeComponent } from './add-shoe/add-shoe.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    ShoeDetailComponent,
    AddShoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
