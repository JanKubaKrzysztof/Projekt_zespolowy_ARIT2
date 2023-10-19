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
    return this.http.get<Product[]>('https://api.example.com/data');
  }
}
