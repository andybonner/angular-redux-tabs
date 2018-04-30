import { Injectable } from '@angular/core';
// import AnyAction which extends Action but allows for other props besides just type
import { AnyAction } from 'redux';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class TabActions {

  static SELECT = 'SELECT';
  static POPULATE = 'POPULATE';

  select(payload): AnyAction {
    return {
      type: TabActions.SELECT,
      payload: payload
    };
  }

  populate(payload): AnyAction {
    return {
      type: TabActions.POPULATE,
      payload: payload
    };
  }
}
