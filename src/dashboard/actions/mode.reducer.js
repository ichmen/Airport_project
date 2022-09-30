import { MODE_CHANGED } from "./mode.actions";
const defaultState={mode:'departures'}

export function modeReducer(state = defaultState, action) {
  console.log(action.payload)
    switch (action.type) {
      case MODE_CHANGED:
        return { ...state, mode:action.payload.mode };
  
      default:
        return state;
    }
  }