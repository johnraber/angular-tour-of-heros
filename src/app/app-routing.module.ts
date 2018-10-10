import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HereosComponent } from './hereos/hereos.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HereosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //  initialize the router and start it listening for browser location changes
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'emptyOnly' // default
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}


