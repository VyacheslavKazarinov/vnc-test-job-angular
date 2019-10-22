import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkStatusService} from './services/network-status.service';
import {NumberService} from './services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUserLoggedIn$: Observable<boolean>;
  getNumbers$: Observable<number[]>;

  constructor(
    private readonly networkStatusService: NetworkStatusService,
    private readonly numberService: NumberService,
  ) {
    this.isUserLoggedIn$ = this.networkStatusService.getOnlineStatus();
    this.getNumbers$ = this.numberService.getListNumber();
  }
}
