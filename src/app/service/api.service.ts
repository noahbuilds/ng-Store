import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  productApi = 'https://fakestoreapi.com/products';

  getProduct() {
    return this.http.get<object>(this.productApi).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
