import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  listView: boolean = true


  ngOnInit(){
    
  }

  isList(){
    this.listView = !this.listView
  }

}
