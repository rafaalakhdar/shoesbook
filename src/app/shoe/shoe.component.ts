import { Component, OnInit } from '@angular/core';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
shoe: Shoe[];
s: Shoe;
  constructor(private service: ShoeServiceService) { }

  ngOnInit(): void {
    this.service.getShoes().subscribe((data: Shoe[]) => this.shoe = data );
    this.s = new Shoe();
  }
  delete(id){
    this.service.DeleteShoes(id).subscribe(
      () => this.shoe = this.shoe.filter(shoe => shoe.id !== id)
    );
  }
  pushShoes(p: Shoe){
    this.service.adddshoes(p).subscribe(
      resultat => {
      }, (err) => {
        console.log(err);
      }
    ); }
}
