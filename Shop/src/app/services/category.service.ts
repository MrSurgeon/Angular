import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private httpClientService: HttpClient) {
    this.path = "http://localhost:3000/categories";
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
  getCategories(): Observable<Category[]> {
    return this.httpClientService.get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.HandleError)
    )
  }
}
