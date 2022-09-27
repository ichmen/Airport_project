import { MODE_CHANGED } from "./mode.actions";
const defaultState='departures'

export function modeReducer(state = defaultState, action) {
    switch (action.type) {
      case MODE_CHANGED:
        return { ...state, mode: action.payload.mode };
  
      default:
        return state;
    }
  }