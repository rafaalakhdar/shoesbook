import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Shoe } from 'src/app/model/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {
  url = 'http://localhost:3000/shoe/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(private  http: HttpClient) { }

  getShoes(){
    return this.http.get<Shoe[]>(this.url);

  }
  DeleteShoes(id){
    return this.http.delete(this.url + id);
  }
  getshoeFromId(id: number): Observable<any> {

    const url = `${this.url}/${id}`;
    return this.http.get<Shoe>(url).pipe(
      tap(selectedShoe => console.log(`selected movie = ${JSON.stringify(selectedShoe)}`)),
    catchError(error => of(new Shoe()))
  );
  }
  updateshoe(shoe: Shoe): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.url}/${shoe.id}`, shoe, httpOptions).pipe(
    tap(updatedShoe => console.log(`updated shoe = ${JSON.stringify(updatedShoe)}`)),
    catchError(error => of(new Shoe()))
  );
  }
  adddshoes(e: Shoe){
    return this.http.post(this.url, e);
  }
}
