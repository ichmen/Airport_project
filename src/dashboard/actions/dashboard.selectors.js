import { modeSelector } from './mode.selectors';
import { dateWithOffset } from '../../utils/utils';
import { dateSelector } from './calendar.selectors';

export function flightsListSelector(state) {
  const flights = state.dashboard.flightsList[modeSelector(state)];
  const date = dateSelector(state);
  if (!flights) {
    return [];
  }
  // console.log(
  //   flights
  //     .filter(({ timeToStand }) => dateWithOffset(timeToStand).getDate() === date.getDate())
  //     .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand)),
  // );
  return flights
    .filter(({ timeToStand }) => dateWithOffset(timeToStand).getDate() === date.getDate())
    .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand));
}
