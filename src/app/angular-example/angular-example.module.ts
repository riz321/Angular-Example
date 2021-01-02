import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularExampleRoutingModule } from './angular-example-routing.module';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';
import { HelloComponent } from './view-children-example/hello/hello.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { HelloChildComponent } from './view-child-example/hello-child/hello-child.component';


@NgModule({
  declarations: [ViewChildrenExampleComponent, HelloComponent, ViewChildExampleComponent, HelloChildComponent],
  imports: [
    CommonModule,
    AngularExampleRoutingModule
  ]
})
export class AngularExampleModule { }
