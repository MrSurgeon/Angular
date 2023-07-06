import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';

@Injectable()
export class ProductService {

  constructor(private httpClientService: HttpClient) {
    this.path = "http://localhost:3000/products";
  }
  private path: string
  private HandleError(errorResponse: HttpErrorResponse) {
    let errorMessage: string = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu: ' + errorResponse.error.message
    }
    else
      errorMessage = "Sistemsel bir hata";
    return throwError(() => new Error(errorMessage));
  }
  getProducts(categoryId: number): Observable<Product[]> {
    let productsPath = this.path
    if (categoryId) {
      productsPath += "?categoryId=" + categoryId
    }
    return this.httpClientService.get<Product[]>(productsPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.HandleError)
    )
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "token"
      })
    };
    return this.httpClientService.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.HandleError)
    )
  }
}
