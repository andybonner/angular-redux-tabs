import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { TabActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // NB for future: tab component will need an Observable on the tabs to dispatch select with appropriate index

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TabActions
  ) {}
  populate() {
    this.ngRedux.dispatch(this.actions.populate()); // what's up with the linting error looking for all props?
  }
  // do not need function for tab select; that can be in tab component
}
