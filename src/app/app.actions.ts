import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class TabActions {
  static SELECT = 'SELECT';
  static POPULATE = 'POPULATE';

  select(payload): Action {
    return {
      type: TabActions.SELECT
      // account for action payload here?
    };
  }

  populate(): Action {
    return { type: TabActions.POPULATE };
  }
}
