import { modeSelector } from './mode.selectors';

export function flightsListSelector(state) {
  console.log(state.dashboard.flightsList[modeSelector(state)]);
  return state.dashboard.flightsList[modeSelector(state)];
}
