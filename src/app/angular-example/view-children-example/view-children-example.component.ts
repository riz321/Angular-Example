import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-view-children-example',
  templateUrl: './view-children-example.component.html',
  styleUrls: ['./view-children-example.component.scss']
})
export class ViewChildrenExampleComponent implements OnInit, AfterViewInit {
  @ViewChildren('pnameTemp') persons!: QueryList<ElementRef>;
  @ViewChildren(HelloComponent) hellos!: QueryList<any>;
  version: number = 6;
  flag1: boolean = false;
  flag2: boolean = false;
  display: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  viewElementsData(){

    console.log('------------------------------ HTML Element ---------------------------  ---');
    this.persons.forEach(el => console.log(el));
    console.log('------------------------------- HTML Element  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML nativeElement ---------------------------  ---');
    this.persons.forEach(el => console.log(el.nativeElement));
    console.log('------------------------------- HTML nativeElement  ---------------------  ---\n\n\n');


    console.log('------------------------------ inner HTML  ---------------------------  ---');
    this.persons.forEach(el => console.log(el.nativeElement.innerHTML));
    console.log('------------------------------- inner HTML  ---------------------  ---\n\n\n');


    console.log('------------------------------ inner TEXT  ---------------------------  ---');
    this.persons.forEach(el => console.log(el.nativeElement.innerText));
    console.log('------------------------------- inner TEXT  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML child ---------------------------  ---');
    this.persons.forEach(el => console.log(el.nativeElement.children[0]));
    console.log('------------------------------- HTML child  ---------------------  ---\n\n\n');

    console.log('------------------------------ HTML child content---------------------------  ---');
    this.persons.forEach(el => console.log(el.nativeElement.children[0].innerText));
    console.log('-------------------------------  HTML child content---------------------  ---\n\n\n');
  }

  show(pTemp:any){
    this.persons.forEach(el => 
      {
        console.log(el.nativeElement.children[1])
        if(pTemp==el.nativeElement.children[1]){
            alert("match done");
        }
      });
  }

  showVersion(){
    this.hellos.forEach(hello => {
      console.log(hello);
      hello.setVersionByParent(this.version);
    });
  }


  ngAfterViewInit():void {

  }


}
