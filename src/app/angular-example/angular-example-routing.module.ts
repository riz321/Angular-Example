import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';

const routes: Routes = [
  {path : 'viewchildren', component : ViewChildrenExampleComponent},
  {path : 'viewchild', component : ViewChildExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularExampleRoutingModule { }
