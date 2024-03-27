import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productObj: any;
  login: boolean = false;

  constructor(private http: HttpClient,private router: Router) {
    if (localStorage.getItem('user') === 'user@demo.com') {
      this.login = true
      this.http.get('https://fakestoreapi.com/products').subscribe((res:any) => {
        this.productObj = res
      })
    }
  }
}
