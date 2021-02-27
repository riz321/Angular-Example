import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomUpdate1Component } from './dom-update1/dom-update1.component';
import { DomUpdate2Component } from './dom-update2/dom-update2.component';
import { QuerySelectorComponent } from './query-selector/query-selector.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';

const routes: Routes = [
  {path : 'viewchildren', component : ViewChildrenExampleComponent},
  {path : 'viewchild', component : ViewChildExampleComponent},
  {path : 'dom-mainupulatioin1', component : DomUpdate1Component},
  {path : 'dom-mainupulatioin2', component : DomUpdate2Component},
  {path : 'query-selector', component : QuerySelectorComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularExampleRoutingModule { }
