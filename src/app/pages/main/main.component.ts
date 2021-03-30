import { Component, OnInit } from '@angular/core';
import { MainService, Product } from '../shared/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listView: boolean = true
  products: Product[] = []

  constructor(private service: MainService){}

  ngOnInit(){
    this.getAllProducts()
  }

  getAllProducts(){
    this.service.fetchAllproducts()
      .subscribe(res => {
        this.products = res
        //console.log(this.products)
      })
  }


  getProductById(){

  }


  // view mode switcher on page
  isList(){
    this.listView = !this.listView
  }



}
