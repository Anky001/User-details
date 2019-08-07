import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Input() sidenav: any;
  constructor(private authService: AuthService, private router: Router) { }

  public goToPage(page: string) {
    this.closeNav();
    this.router.navigateByUrl(page);
  }

  public logout() {
    this.closeNav();
    this.authService.logout();
  }

  private closeNav() {
    this.sidenav.close();
  }

}
