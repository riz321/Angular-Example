import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dom-update2',
  templateUrl: './dom-update2.component.html',
  styleUrls: ['./dom-update2.component.scss']
})
export class DomUpdate2Component implements OnInit {
  flag1: boolean = false;
  data:any;
  displayStatus: boolean = true;
  @ViewChildren('subjectListTemp') subjectTemp!: QueryList<ElementRef>;
  showHideStatus:boolean=false;
  @ViewChildren('colorListTemp') colorListTemp!: QueryList<ElementRef>;;
  constructor(private renderer: Renderer2,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.data = [{ rollNo: 1, name: "abcd", subject: ["math", "English", "Urdu"] }
    , { rollNo: 2, name: "xyz", subject: ["math", "English", "Urdu"] }
    , { rollNo: 3, name: "pqr", subject: ["math", "English", "Urdu"] }
    , { rollNo: 4, name: "lmn", subject: ["math", "English", "Urdu"] }
  ];
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
