import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  close: boolean = true

  catId: string = 'samsung'

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.close = !this.close
  }

}
