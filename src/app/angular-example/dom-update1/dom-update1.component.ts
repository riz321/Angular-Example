import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('maincontent') mainContent!: ElementRef;
  @ViewChild('subcontent') subContent: any;
  @ViewChild(ChildComponent) child: any ;
  @ViewChild('test') test!: ElementRef;
  @ViewChild('selectList') selectList!: ElementRef;
  ele:any;
  constructor(private el: ElementRef,
              private renderer: Renderer2)
              { }

  ngOnInit(): void {
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

}
