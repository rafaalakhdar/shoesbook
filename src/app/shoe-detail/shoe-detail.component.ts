import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  @Input() id: number;
  @Output() closeM: EventEmitter<Shoe> = new EventEmitter();
  shoes: Shoe;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private service: ShoeServiceService,
              private location: Location,
              private sanitizer: DomSanitizer,
              private syn: DomSanitizer,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.getShoe();
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.syn.bypassSecurityTrustUrl('assets/images/' + imageUrl.substring(12));

  }

  getShoe(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    console.log(this.id);
    this.service.getshoeFromId(this.id).subscribe(shoe => {
      this.shoes = shoe;
      this.initForm();
    });
  }

  changeImage(evt) {
    console.log(evt.target.value);
    this.shoes.image = evt.target.value;
    this.form.patchValue(({
      image: evt.target.value
    }));
  }

  initForm() {
    this.form = new FormGroup({
      brand: new FormControl(this.shoes.brand, {validators: [Validators.required, Validators.pattern('[a-zA-Z, ]+$')]}),
      modele: new FormControl(this.shoes.modele, {validators: [Validators.required, Validators.pattern('[a-zA-Z, ]+$')]}),
      size: new FormControl(this.shoes.size, {validators: [Validators.required, Validators.min(36), Validators.max(48)]}),
      color: new FormControl(this.shoes.color, {validators: [Validators.required, Validators.pattern('[a-zA-Z, ]+$')]}),
      quantity: new FormControl(this.shoes.quantity, {validators: [Validators.required, Validators.minLength(1), Validators.maxLength(3)]}),
      price: new FormControl(this.shoes.price, {validators: [Validators.required, Validators.min(1)]}),
      web: new FormControl(this.shoes.web, {validators: [Validators.required, Validators.pattern('www.*')]}),
      release: new FormControl(this.shoes.release, {validators: [Validators.required]}),
      image: new FormControl(this.shoes.image, {validators: [Validators.required]})
    });
  }

  save(): void {
    if (this.form.valid) {
      const shoe: Shoe = {...this.shoes, ...(this.form.getRawValue() as Shoe)};
      console.log(shoe);
      this.service.updateshoe(shoe).subscribe(() => this.closeModal(shoe));
    }
  }

  goBack(): void {
    this.location.back();
  }

  closeModal(shoe: Shoe) {
    this.closeM.emit(shoe);
    this.activeModal.close(shoe);
  }
}
