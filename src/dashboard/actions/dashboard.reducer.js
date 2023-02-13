import { FLIGTS_LIST_LOADED, FLIGHTS_IS_LOADED_TOGGLE } from './dashboard.actions';

const defaultState = { flightsList: [], isLoaded: false };

export function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case FLIGTS_LIST_LOADED:
      return { ...state, flightsList: action.payload.flightsList, isLoaded: true };
    case FLIGHTS_IS_LOADED_TOGGLE:
      return { ...state, isLoaded: fasle };
    default:
      return state;
  }
}
