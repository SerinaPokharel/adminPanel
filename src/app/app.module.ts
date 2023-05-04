import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesTransactionComponent } from './pages/pages-transaction/pages-transaction.component';
import { PagesJpComponent } from './pages/pages-jp/pages-jp.component';
import { PagesGameComponent } from './pages/pages-game/pages-game.component';
import { PagesWheelComponent } from './pages/pages-wheel/pages-wheel.component';
import { PagesAdminStructComponent } from './pages/pages-adminStruct/pages-adminStruct.component';
import { PagesReportComponent } from './pages/pages-report/pages-report.component';
import { PagesJpsetComponent } from './pages/pages-jpset/pages-jpset.component';
 
 
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent, 
    UsersProfileComponent,
    //
    PagesTransactionComponent,
    PagesGameComponent,
    PagesJpComponent,
    PagesWheelComponent,
    PagesAdminStructComponent,
    PagesReportComponent,
    PagesJpsetComponent,
    
    //

    PagesLoginComponent,
    PagesError404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
