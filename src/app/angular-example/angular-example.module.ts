import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularExampleRoutingModule } from './angular-example-routing.module';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';


@NgModule({
  declarations: [ViewChildrenExampleComponent],
  imports: [
    CommonModule,
    AngularExampleRoutingModule
  ]
})
export class AngularExampleModule { }
