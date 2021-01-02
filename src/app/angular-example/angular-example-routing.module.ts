import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomUpdate1Component } from './dom-update1/dom-update1.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';

const routes: Routes = [
  {path : 'viewchildren', component : ViewChildrenExampleComponent},
  {path : 'viewchild', component : ViewChildExampleComponent},
  {path : 'dom-mainupulatioin1', component : DomUpdate1Component}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularExampleRoutingModule { }
