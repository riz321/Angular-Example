import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';

const routes: Routes = [
  {path : 'viewchildren', component : ViewChildrenExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularExampleRoutingModule { }
