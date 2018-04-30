// AnyAction: extends Action, but allows for other props besides just type
import { AnyAction } from 'redux';
import { TabActions } from './app/app.actions';
import { tabData, tabData2 } from './sampleData';

export interface IAppState {
  populated: boolean;
  tabsArray: object;
  activeTabIndex: number;
  activeTabContent: string;
}

export const INITIAL_STATE: IAppState = {
  populated: false,
  tabsArray: [],
  activeTabIndex: 0,
  activeTabContent: ''
};

// In a more complex app I would probably want to break reducers out into their own file
export function rootReducer(lastState: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
    case TabActions.POPULATE: return {
      populated: true,
      tabsArray: action.payload,
      activeTabIndex: 0,
      activeTabContent: action.payload[0].content
    };
    case TabActions.SELECT: return {
      populated: lastState.populated,
      tabsArray: lastState.tabsArray,
      activeTabIndex: action.payload,
      activeTabContent: lastState.tabsArray[action.payload].content
    };
    default: return lastState;
  }
}
