import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-dom-update1',
  templateUrl: './dom-update1.component.html',
  styleUrls: ['./dom-update1.component.scss']
})
export class DomUpdate1Component implements OnInit {
  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;
  flag6: boolean = false;
  flag7: boolean = false;
  flag8: boolean = false;
  flag9: boolean = false;
  flag10: boolean = false;
  @ViewChild('maincontent') mainContent!: ElementRef;
  @ViewChild('subcontent') subContent: any;
  @ViewChild(ChildComponent) child: any ;
  @ViewChild('test') test!: ElementRef;
  @ViewChild('selectList') selectList!: ElementRef;
  ele:any;
  @ViewChildren('num') num!: QueryList<ElementRef>;
  @ViewChild('test2') test2!: ElementRef;
  data = [1, 2, 3];
  studentData:any;

  displayStatus: boolean = true;
  @ViewChildren('subjectListTemp') subjectTemp!: QueryList<ElementRef>;
  showHideStatus:boolean=false;
  @ViewChildren('colorListTemp') colorListTemp!: QueryList<ElementRef>;
  constructor(private el: ElementRef,
              private renderer: Renderer2)
              { }

  ngOnInit(): void {
    this.studentData = [{ rollNo: 1, name: "abcd", subject: ["math", "English", "Urdu"] }
    , { rollNo: 2, name: "xyz", subject: ["math", "English", "Urdu"] }
    , { rollNo: 3, name: "pqr", subject: ["math", "English", "Urdu"] }
    , { rollNo: 4, name: "lmn", subject: ["math", "English", "Urdu"] }
  ];
  }

  public changeMainContent() {
    console.log("changeMainContent");
    this.mainContent.nativeElement.setAttribute("style", "color:red");
  }

  public changeSubContent() {
    console.log("changeSubContent");
    this.subContent.nativeElement.setAttribute("style", "color:green");
  }

  toggleChild() {
    this.child.visible = !this.child.visible;
  }


  setColor(){
    this.renderer.setStyle(this.test.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
  }


  ngAfterViewInit() {
    // this.ele = (<HTMLElement>this.el.nativeElement)
    //   .querySelector('.dx-edit-row.dx-command-edit.dx-link-save');
  
  }

  onChange() {
    console.log('Selection Changed');
  }

  setButtonEvent(){
    setTimeout(() => {
      this.ele = (<HTMLElement>this.el.nativeElement)
      .querySelector('.dx-edit-row.dx-command-edit.dx-link-save');

      this.renderer.listen(this.ele, 'click', () => {
        alert('Buton was clicked');
        //this.selectList.nativeElement.change();
    });
    }, 2000);
   
  }

  changeColor1(){
    this.num.toArray()[2].nativeElement.style.color = 'red';
  }

  changeColor2(){
    // this.num.toArray()[1].nativeElement.style.color = 'green';
    this.num.forEach(element => {
      element.nativeElement.style.color = 'green'
    })
  }


  assignClass() {
    this.renderer.addClass(this.test.nativeElement, 'active');
  }

  removeClass() {
    this.renderer.removeClass(this.test.nativeElement, 'active');
  }

  @ViewChild('elem') elem!: ElementRef;
  createDivElement(){
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('I am dyanmically created div');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.elem.nativeElement, div);
    this.renderer.listen(this.elem.nativeElement, 'click', () => {
      alert("div is clicked");
    });
  }

  @ViewChild('elPrpTemp') elPrpTemp!: ElementRef;
  setElementProp(){
    this.renderer.setProperty(this.elPrpTemp.nativeElement, 'innerHTML', '<h1>Hello world</h1>');
  }

  viewAllSubjects(status: boolean) {
    console.log(this.subjectTemp);
    this.subjectTemp.forEach( obj =>{
      let className=obj.nativeElement.className;
      if(!this.showHideStatus){
        this.renderer.removeClass(obj.nativeElement, className);
        this.renderer.addClass(obj.nativeElement, 'show-list' );
      }else{
        this.renderer.removeClass(obj.nativeElement, className);
        this.renderer.addClass(obj.nativeElement, 'hide-list' );
      }
    });
    this.showHideStatus=!this.showHideStatus;
  }

  viewSubject(index:number){
    let currentNativeElement=this.subjectTemp.toArray()[index].nativeElement
    let className=currentNativeElement.className;
    if(className=='hide-list'){
      this.renderer.removeClass(currentNativeElement, className);
      this.renderer.addClass(currentNativeElement, 'show-list' );
    }else{
      this.renderer.removeClass(currentNativeElement, className);
      this.renderer.addClass(currentNativeElement, 'hide-list' );
    }
  }

  changeColor(tempVar:Element){
    this.renderer.setStyle(tempVar, 'background-color', 'blue');
  }

  removeColor(tempVar:Element){
    this.renderer.removeStyle(tempVar, 'background-color');
  }

}
