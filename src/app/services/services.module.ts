import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth-service/auth.service';
import { AuthGuardService } from './auth-guard-service/auth-guard.service';
import { HttpService } from './http-service/http.service';
import { UserDetailsService } from './user-details-service/user-details.service';

@NgModule({
    imports: [CommonModule],
    providers: [AuthGuardService, AuthService, HttpService, UserDetailsService],
})
export class ServicesModule { }

