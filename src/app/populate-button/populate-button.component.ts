import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { TabActions } from '../app.actions';

@Component({
  selector: 'app-populate-button',
  templateUrl: './populate-button.component.html',
  styleUrls: ['./populate-button.component.css']
})
export class PopulateButtonComponent {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TabActions
  ) { }

  populate() {
    this.ngRedux.dispatch(this.actions.populate());
  }

}
