import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../store';
import { tabData, tabData2 } from '../sampleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tabData = tabData;
  tabData2 = tabData2;

  @select() readonly populated$: Observable<boolean>;
  @select() readonly tabsArray$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) {}
}
