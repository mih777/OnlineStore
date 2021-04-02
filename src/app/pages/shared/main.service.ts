import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

export interface Product{
  _id?: string,
  title: string,
  image: string,
  category: string,
  info: string,
  price: number | string
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  fetchAllproducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/api/products/`)  
  }

  fetchProductById(_id: string): Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/api/products/${_id}`)
  }


}
