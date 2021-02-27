import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularExampleRoutingModule } from './angular-example-routing.module';
import { ViewChildrenExampleComponent } from './view-children-example/view-children-example.component';
import { HelloComponent } from './view-children-example/hello/hello.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { HelloChildComponent } from './view-child-example/hello-child/hello-child.component';
import { DomUpdate1Component } from './dom-update1/dom-update1.component';
import { ChildComponent } from './dom-update1/child/child.component';
import { CreateButtonDirective } from './dom-update1/create-button.directive';
import { DomUpdate2Component } from './dom-update2/dom-update2.component';
import { QuerySelectorComponent } from './query-selector/query-selector.component';


@NgModule({
  declarations: [ViewChildrenExampleComponent, HelloComponent, ViewChildExampleComponent, HelloChildComponent, DomUpdate1Component, ChildComponent, CreateButtonDirective, DomUpdate2Component, QuerySelectorComponent],
  imports: [
    CommonModule,
    AngularExampleRoutingModule
  ]
})
export class AngularExampleModule { }
