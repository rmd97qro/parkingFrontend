import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Card, CardDTO, CardModel } from "./../models/card.model";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000/api/v1/products'

  constructor( private http: HttpClient ) {

  }

  $emtterCreate = new EventEmitter();

  createEvent(data: CardDTO) {
    this.$emtterCreate.emit(data);
  }

  getAllParkings() {
    return this.http.get<Card[]>('http://localhost:3000/api/v1/products')
  }

  create (data: CardModel ) {
    return this.http.post<Card>(this.apiUrl, data);
  }

  delete (id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}
