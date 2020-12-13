import { Component, OnInit } from '@angular/core';
import {ShoeServiceService} from '../shared/shoe-service.service';
import {Shoe} from '../model/shoe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ShoeServiceService) { }
  shoes: Shoe[] = [];
  ngOnInit(): void {
    this.getShoe();
  }
  getShoe(): void {

    this.service.getShoes().subscribe({next: shoe => {
      this.shoes = shoe;
    }});
  }
}
