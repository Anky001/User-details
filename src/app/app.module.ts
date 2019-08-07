// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsListComponent } from './components/users/user-details-list/user-details-list.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

// Services
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

// Interceptors
import { HttpInterceptor } from './interceptors/http-interceptor/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    UsersComponent,
    UserDetailsListComponent,
    UserProfileComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,

    ServicesModule,
  ],
  providers: [CookieService, JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
