import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkStatusService} from './services/network-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vnc-test';
  isUserLoggedIn$: Observable<boolean>;

  constructor(private readonly networkStatusService: NetworkStatusService) {
    this.isUserLoggedIn$ = this.networkStatusService.getOnlineStatus();
  }
}
