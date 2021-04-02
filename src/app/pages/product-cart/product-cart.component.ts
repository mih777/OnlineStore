import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber } from 'rxjs';
import { MainService , Product} from '../shared/main.service'

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  description: boolean = false
  product: Product

  constructor(private route: ActivatedRoute, private MainService: MainService){}

  ngOnInit(){

    this.MainService.fetchProductById(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        res => this.product = res
      )

  }

  showDescription(){
    this.description = !this.description
  }

}
