import { Component, OnInit } from '@angular/core';
import example from '../assets/example.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data:any;
  ngOnInit(){
    this.data=example;
    console.log(this.data);
    // const exampleList = require('../assets/example.json');
    // console.log(exampleList); 
};
  
  title = 'angular';
}
