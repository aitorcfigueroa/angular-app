import { Component } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ ProductComponent, CommonModule ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private http: HttpClient) {};
  products: Product[] = [];

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      })
  }

}
