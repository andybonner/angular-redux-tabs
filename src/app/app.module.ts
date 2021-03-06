import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { rootReducer, IAppState, INITIAL_STATE } from '../store';
import { TabActions } from './app.actions';

import { AppComponent } from './app.component';
import { PopulateButtonComponent } from './populate-button/populate-button.component';
import { TabHolderComponent } from './tab-holder/tab-holder.component';
import { TabRowComponent } from './tab-row/tab-row.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PopulateButtonComponent,
    TabHolderComponent,
    TabRowComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [TabActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension
  ) {
    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers
    );
  }
}
