import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

// export interface Product{
//   _id?: string,
//   title: string,
//   image: string,
//   category: string,
//   info: string,
//   price: number
// }

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  create_product(
    
    title: string,
    category: string,
    info: string,
    description: string,
    price: string,
    image?: File,

  ){
    const fd = new FormData()

    if(image){ fd.append('image', image, image.name) }
    fd.append('title', title),
    fd.append('category', category),
    fd.append('info', info),
    fd.append('description', description),
    fd.append('price', price)

    return this.http.post(`http://localhost:3000/api/products/create`, fd)
  }


}
