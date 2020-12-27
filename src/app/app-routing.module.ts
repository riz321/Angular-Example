import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [  
{path : 'home',loadChildren: () => import('./home-dashboard/home-dashboard.module')
.then(mod => mod.HomeDashboardModule)},
{path : '', redirectTo : '/home', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
