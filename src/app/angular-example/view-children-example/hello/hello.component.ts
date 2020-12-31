import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  @Input() name?: string;
  version: string = "";

  setVersionByParent(val:string) {
    this.version = val;
  }

  ngOnInit(): void {
  }

}
