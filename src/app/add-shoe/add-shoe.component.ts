import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  constructor(private service: ShoeServiceService) { }
shoes: Shoe;
  saved: boolean;
  @Output() eventAddProduct = new EventEmitter<Shoe>();
  ngOnInit(): void {
    this.shoes = new Shoe();
    this.saved = true;
  }

  save(){

    this.eventAddProduct.emit(this.shoes);
    this.saved = false;
  }
}
