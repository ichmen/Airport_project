import { FLIGTS_LIST_LOADED } from './dashboard.actions';

const defaultState = { flightsList: [] };

export function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case FLIGTS_LIST_LOADED:
      return { ...state, flightsList: action.payload.flightsList };

    default:
      return state;
  }
}
