import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';
@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ShoeServiceService,
              private location: Location,
              private sanitizer: DomSanitizer,
              private syn: DomSanitizer) { }
@Input() shoes: Shoe;
  ngOnInit(): void {
    this.getShoeFromRoute();
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.syn.bypassSecurityTrustUrl( 'assets/images/' + imageUrl.substring(12));

  }
  getShoeFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);

    this.service.getshoeFromId(id).subscribe(shoe => this.shoes = shoe);
  }
  save(): void {
    this.service.updateshoe(this.shoes).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
