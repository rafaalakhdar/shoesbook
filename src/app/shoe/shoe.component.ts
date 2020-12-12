import {Component, OnInit} from '@angular/core';
import {Shoe} from '../model/shoe';
import {ShoeServiceService} from '../shared/shoe-service.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoeDetailComponent} from '../shoe-detail/shoe-detail.component';


@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  shoe: Shoe[];

  modalRef: any;

  constructor(private service: ShoeServiceService, private syn: DomSanitizer, private modalService: NgbModal) {
  }


  sanitizeImageUrl(imageUrl: string): SafeUrl {

    return this.syn.bypassSecurityTrustUrl('assets/images/' + imageUrl.substring(12));

  }

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.service.getShoes().subscribe((data: Shoe[]) => this.shoe = data);
  }

  delete(id) {

    this.service.DeleteShoes(id).subscribe(
      () => this.shoe = this.shoe.filter(shoe => shoe.id !== id)
    );
  }

  open(id) {
    this.modalRef = this.modalService.open(ShoeDetailComponent);
    this.modalRef.componentInstance.id = id;
    this.modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.getShoes();
      }
    });
  }

  closeModal() {
    console.log('close');
    // this.modalService.close(this.modalRef);
  }

  pushShoes(p: Shoe) {
    this.service.adddshoes(p).subscribe(
      resultat => {
        this.getShoes();
      }, (err) => {
        console.log(err);
      }
    );
  }


}
