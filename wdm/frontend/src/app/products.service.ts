import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="http://localhost:4000";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url + '/products');
  }

}
