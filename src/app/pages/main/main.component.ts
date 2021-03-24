import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

  listView: boolean = true


  isList(){
    this.listView = !this.listView
  }



}
