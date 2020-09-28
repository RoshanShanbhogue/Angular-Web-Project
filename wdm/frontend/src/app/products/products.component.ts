import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  clicked= false;
  length = 96;
  pageSize = 6;
  pageSizeOptions: number[] = [6, 12, 18];

  // MatPaginator Output
  pageEvent: PageEvent;

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }

  constructor(private productService: ProductsService) { }

  products: Product[];

  fetchProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      console.log("Data requsted...");
      console.log(this.products);
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  addClass() {
    this.clicked = true;
  }
  subClass() {
    this.clicked = false;
  }
}
