import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import 'rxjs';

import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { AppState, initialState } from './state';
import { fetchState } from './actions';
import { reducer } from './reducer';
import { epics as appEpics } from './epics';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const epics = combineEpics(...appEpics);
const epicMiddleware = createEpicMiddleware(epics);

const store = createStore<AppState>(reducer, initialState, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

store.dispatch(fetchState());