import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HelloChildComponent } from './hello-child/hello-child.component';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.scss']
})
export class ViewChildExampleComponent implements OnInit {
  flag1: boolean = false;
  flag2: boolean = false;
  version:number=11;
  @ViewChild('pnameTemp') persons!: ElementRef;
  @ViewChild(HelloChildComponent) hello!: HelloChildComponent;
  constructor() { }

  ngOnInit(): void {
    console.log( "this >>>>> "+this.hello);
  }

  viewElementsData(){

    console.log('------------------------------ HTML Element ---------------------------  ---');
    console.log(this.persons);
    console.log('------------------------------- HTML Element  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML nativeElement ---------------------------  ---');
    console.log(this.persons.nativeElement);
    console.log('------------------------------- HTML nativeElement  ---------------------  ---\n\n\n');


    console.log('------------------------------ inner HTML  ---------------------------  ---');
    console.log( this.persons.nativeElement.innerHTML);
    console.log('------------------------------- inner HTML  ---------------------  ---\n\n\n');


    console.log('------------------------------ inner TEXT  ---------------------------  ---');
    console.log(this.persons.nativeElement.innerText);
    console.log('------------------------------- inner TEXT  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML child ---------------------------  ---');
   console.log(this.persons.nativeElement.children[0]);
    console.log('------------------------------- HTML child  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML child content---------------------------  ---');
    console.log(this.persons.nativeElement.children[0].innerText);
    console.log('-------------------------------  HTML child content---------------------  ---\n\n\n');
  }

  showVersion(){
      console.log( "this >>>>> "+this.hello);
      this.hello.setVersionByParent(this.version++
        );
  }

}
