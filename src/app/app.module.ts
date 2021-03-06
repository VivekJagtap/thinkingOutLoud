import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


/**
 * User defined Components
 */
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { IdeasComponent } from './ideas/ideas.component';
import { AutherComponent } from './auther/auther.component';
import { ModalComponent } from './UiComponents/modal/modal.component';
import { ProfileComponent } from './profile/profile.component';

/**
 * Services
 */
import { AuthenticationGuardService } from './Services/authentication-guard.service';
import { RestResourceServiceService } from './Services/rest-resource-service.service';
import { RegistrationService } from './Services/registration.service';


// Define the routes
const ROUTES = [
  {
    path: '*',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthenticationGuardService]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate:[]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[]
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate:[AuthenticationGuardService]
  },
  {
    path: 'ideas',
    component: IdeasComponent,
    canActivate:[AuthenticationGuardService]
  },
  {
    path: 'auther',
    component: AutherComponent,
    canActivate:[AuthenticationGuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    DashboardComponent,
    ArticlesComponent,
    IdeasComponent,
    AutherComponent,
    ModalComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    AuthenticationGuardService,
    RestResourceServiceService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
