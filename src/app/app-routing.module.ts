import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
//
import { PagesTransactionComponent } from './pages/pages-transaction/pages-transaction.component';
import { PagesGameComponent } from './pages/pages-game/pages-game.component';
import { PagesJpComponent } from './pages/pages-jp/pages-jp.component';``
import { PagesWheelComponent } from './pages/pages-wheel/pages-wheel.component';
import { PagesAdminStructComponent } from './pages/pages-adminStruct/pages-adminStruct.component';
import { PagesReportComponent } from './pages/pages-report/pages-report.component';
import { PagesJpsetComponent } from './pages/pages-jpset/pages-jpset.component';
 
//
import { PagesLoginComponent } from './pages/pages-login/pages-login.component'; 
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'pages-error404', component: PagesError404Component },
  //
  { path: 'pages-transaction', component: PagesTransactionComponent },
  { path: 'pages-game', component: PagesGameComponent },
  { path: 'pages-jp', component: PagesJpComponent },
  { path: 'pages-wheel', component: PagesWheelComponent },
  { path: 'pages-adminStruct', component: PagesAdminStructComponent },
  { path: 'pages-report', component: PagesReportComponent },  
  { path: 'pages-jpset', component: PagesJpsetComponent }, 
  //
  { path: 'pages-login', component: PagesLoginComponent }, 
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
