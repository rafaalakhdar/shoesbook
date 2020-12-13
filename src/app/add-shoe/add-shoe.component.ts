import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  constructor(private service: ShoeServiceService, private route: Router) { }
  shoes: Shoe;

  // @Output() eventAddProduct = new EventEmitter<Shoe>();
  ngOnInit(): void {
    this.shoes = new Shoe();

  }

  save(){
    console.log( ' eeee ' , this.shoes);
    // this.eventAddProduct.emit(this.shoes);
    this.service.adddshoes(this.shoes).subscribe(result => {
      this.route.navigateByUrl('/shoeList', {replaceUrl: true}).then(r => console.log('navig true'));

    });


  }
}
