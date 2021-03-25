import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listView: boolean = true

  ngOnInit(){
    
  }

  isList(){
    this.listView = !this.listView
  }



}
