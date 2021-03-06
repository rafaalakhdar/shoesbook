import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { SearchPipe } from './shared/search.pipe';
import { HomeComponent } from './home/home.component';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    ShoeDetailComponent,
    AddShoeComponent,
    HeaderComponent,
    ContactComponent,
    SearchPipe,
    ZoomDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
