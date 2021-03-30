import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../pages/shared/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() product: Product
  @Input() listView: boolean
  

  constructor() { }

  ngOnInit(): void {
  }

}
