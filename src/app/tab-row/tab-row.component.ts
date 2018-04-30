import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store';
import { TabActions } from '../app.actions';

@Component({
  selector: 'app-tab-row',
  templateUrl: './tab-row.component.html',
  styleUrls: ['./tab-row.component.css']
})
export class TabRowComponent {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TabActions
  ) { }

  @select() readonly tabsArray$: Observable<any>;
  @select() readonly activeTabIndex$: Observable<number>;

  select(index) {
    this.ngRedux.dispatch(this.actions.select(index));
  }

}
