import { Injectable } from '@angular/core';
// import AnyAction which extends Action but allows for other props besides just type
import { AnyAction } from 'redux';

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

  populate(): AnyAction {
    return { type: TabActions.POPULATE };
  }
}
