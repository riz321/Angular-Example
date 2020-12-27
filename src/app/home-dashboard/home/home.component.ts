import { Component, OnInit } from '@angular/core';
// import example from '../assets/example.json';
import example from '../../../assets/example.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data:any;
  ngOnInit(){
    this.data=example;
    console.log(this.data);
    // const exampleList = require('../assets/example.json');
    // console.log(exampleList); 
};

}
