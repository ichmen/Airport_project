import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { dashboardReducer } from './dashboard.reducer';
import thunk from 'redux-thunk';
import { modeReducer } from './mode.reducer';
import calendarReducer from './calendar.reducer';
import searchReducer from './search.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  dashboard: dashboardReducer,
  mode: modeReducer,
  calendar: calendarReducer,
  search: searchReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
