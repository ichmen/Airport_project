import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { dashboardReducer } from './dashboard.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ dashboard: dashboardReducer });

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
