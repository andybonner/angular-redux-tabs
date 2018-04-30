// AnyAction: extends Action, but allows for other props besides just type
import { AnyAction } from 'redux';
import { TabActions } from './app/app.actions';
import { tabData, tabData2 } from './sampleData';

export interface IAppState {
  populated: boolean;
  tabsArray: any; // what type IS most appropriate for an array of objects?
  activeTabIndex: number;
  activeTabContent: string; // or is there another type for HTML?
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
    // How can I get a nice array of sample data in here and reference it?
    case TabActions.POPULATE: return {
      populated: true,
      tabsArray: action.payload,
      // aren't the next 2 lines kinda boilerplatey? Is there a better way of saying "all other props stay the same"?
      activeTabIndex: 0,
      activeTabContent: action.payload[0].content
    };
    case TabActions.SELECT: return {
      populated: lastState.populated,
      tabsArray: lastState.tabsArray,
      activeTabIndex: action.payload,
      activeTabContent: lastState.tabsArray[action.payload].content
    };
  }

  return lastState; // Do I need this?
}
