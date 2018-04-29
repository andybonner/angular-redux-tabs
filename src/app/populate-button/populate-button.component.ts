import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store';
import { TabActions } from '../app.actions';

@Component({
  selector: 'app-populate-button',
  templateUrl: './populate-button.component.html',
  styleUrls: ['./populate-button.component.css']
})
export class PopulateButtonComponent {
  // @select() readonly populated$: Observable<boolean>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TabActions
  ) {
    // this.populated$ = ngRedux.select<boolean>('populated');
   }

  populate() {
    this.ngRedux.dispatch(this.actions.populate());
  }

}
