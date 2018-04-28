/*
What does relationship does the "populate" button have to the store?
What is the store's initial state?
OPTION 1
The <tab> elements always render what they get from Redux.
But the initial state is that the active tab index is NaN, and the tab tile and content are empty strings.
The populate button and the tabs component render programmatically (ngIf/else)--
if store is empty render button; else tabs.
OPTION 2
The initial state is active tab is 0. Tab 0's title and content are already being provided by Redux.
But the button and tabs component render programmatically:
the button flips a boolean (e.g. "populated: true"). (Does this info need to go to Redux, or just within the component?)
Initially, button renders; once it flips its bool, tab component renders with values that were *already* being provided by Redux.

Right now, OPTION 2 sounds less crazypants to me.

But wait. Kevin's exact words are:
  "Clicking the button calls an action that populates the store with the
  required data to render a set of tabs on the screen (previously not visible)"
That straight up says "clicking the button populates the store." The store gains data it didn't have. The store was empty prior to click?
Whether the store being empty vs populated directly causes the invisibility/visibility of the tabs component,
or whether that's done at the same time programmatically, this means the store is empty before click.
(Is empty the same thing as uninitiated?)
See https://redux.js.org/recipes/structuring-reducers/initializing-state:
there's a `createStore`, and a `configureStore`...
Hm, looks like configureStore itself calls createStore. Maybe configureStore is an ngRedux thing.

The angular-redux-quickstart tutorial puts `ngRedux.configureStore` in the constructor function of app.module.ts.
Does putting it in the constructor function mean it happens the moment the module gets loaded?
Can I put it elsewhere and do it programmatically?

UPDATE: Kevin confirms the store is initialized at app start, but is empty.
Clicking the populate button literally pushes the tab data into the empty store.
Still to be seen: if the tabs component is subscribed to the tabs array, and the array is empty,
is that enough to keep anything from showing up in the DOM? Will I have to mess with programmatic visibility?
*/

// AnyAction: extends Action, but allows for other props besides just type
import { AnyAction } from 'redux';
import { TabActions } from './app/app.actions';
import { tabData } from './sampleData';

export interface IAppState {
  tabsArray: any; // what type IS most appropriate for an array of objects?
  activeTabIndex: number;
  activeTabContent: string; // or is there another type for HTML?
}


export function rootReducer(lastState: IAppState, action: AnyAction): IAppState { // do I need the lastState arg if I'm not going to use it?
  switch (action.type) {
    // How can I get a nice array of sample data in here and reference it?
    case TabActions.POPULATE: return {
      tabsArray: tabData,
      // aren't the next 2 lines kinda boilerplatey? Is there a better way of saying "all other props stay the same"?
      activeTabIndex: 0,
      activeTabContent: tabData[0]
     };
    case TabActions.SELECT: return {
      tabsArray: lastState.tabsArray,
      activeTabIndex: action.payload.activeIndx,
      activeTabContent: tabData[action.payload.activeIndx]
    };
  }

  return lastState; // Do I need this?
}
