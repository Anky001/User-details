import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard-service/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
