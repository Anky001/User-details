import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  public isLoggedIn: boolean;
  private authSubscriber: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscriber = this.authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscriber.unsubscribe();
  }

}
