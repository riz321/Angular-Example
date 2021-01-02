import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-child',
  templateUrl: './hello-child.component.html',
  styleUrls: ['./hello-child.component.scss']
})
export class HelloChildComponent implements OnInit {
  @Input() name?: string;
  version: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setVersionByParent(val:number) {
    this.version = val;
  }

}
