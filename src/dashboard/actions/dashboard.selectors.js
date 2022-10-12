import { modeSelector } from './mode.selectors';
import { dateSelector } from './calendar.selectors';
import { searchTextSelector } from './search.selectors';

export function flightsListSelector(state) {
  const mode = modeSelector(state);
  const flights = state.dashboard.flightsList[mode];
  // console.log(mode);
  const date = dateSelector(state);
  const searchText = searchTextSelector(state);
  if (!flights) {
    return [];
  }
  const timeSelectorString = mode === 'departure' ? 'timeDepShedule' : 'timeToStand';

  return flights
    .filter(
      ({ [timeSelectorString]: sheduleTime }) => new Date(sheduleTime).getDate() === date.getDate(),
    )
    .sort((a, b) => new Date(a[timeSelectorString]) - new Date(b[timeSelectorString]));
  // result.forEach(el => console.log(el[timeSelectorString]));
  // return result;
}
// departure "timeDepShedule"
//arrival "timeArrShedule":
