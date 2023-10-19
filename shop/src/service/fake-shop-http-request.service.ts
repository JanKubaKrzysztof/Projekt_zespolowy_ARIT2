import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class FakeShopHttpRequestService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const searchCategory = category ?  `/category/${category}` : '';
    return this.http.get<Product[]>(`https://fakestoreapi.com/products${searchCategory}`);
  }
}
