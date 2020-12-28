import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children-example',
  templateUrl: './view-children-example.component.html',
  styleUrls: ['./view-children-example.component.scss']
})
export class ViewChildrenExampleComponent implements OnInit {
display:boolean=true;
  constructor() { }
  data:any;
  displayStatus:boolean=true;

  ngOnInit(): void {
    this.data=[{rollNo:1,name:"abcd",subject:["math","English","Urdu"]}
    ,{rollNo:2,name:"xyz",subject:["math","English","Urdu"]}
    ,{rollNo:3,name:"pqr",subject:["math","English","Urdu"]}
    ,{rollNo:4,name:"lmn",subject:["math","English","Urdu"]}
];
  }

  viewAllSubjects(status:boolean){
    if(status){
      this.data.forEach((element: any) => element['view']=true);
      this.displayStatus=false;
    }else{
      this.data.forEach((element: any) => element['view']=false);
      this.displayStatus=true;
    }
    
  }

}
