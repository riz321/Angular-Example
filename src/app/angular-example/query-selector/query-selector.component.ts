import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.scss']
})
export class QuerySelectorComponent implements OnInit {

  constructor(private renderer: Renderer2,private elRef:ElementRef) { }

  ngOnInit(): void {
   const divElement= document.querySelector("div");
   console.log(divElement);

   const divElement2= document.querySelector(".hello");
   console.log(divElement2);
   this.renderer.setStyle(divElement2, 'background-color', 'blue');

   var div = this.elRef.nativeElement.querySelector('#secDiv');
   
   console.log(div);
   this.renderer.setStyle(div, 'background-color', 'green');
   console.log(div.nativeElement);
  }

}
