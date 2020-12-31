import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularExampleRoutingModule } from './angular-example-routing.module';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';
import { HelloComponent } from './view-children-example/hello/hello.component';


@NgModule({
  declarations: [ViewChildrenExampleComponent, HelloComponent],
  imports: [
    CommonModule,
    AngularExampleRoutingModule
  ]
})
export class AngularExampleModule { }
