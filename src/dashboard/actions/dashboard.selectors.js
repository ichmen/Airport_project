import { modeSelector } from './mode.selectors';
import { dateSelector } from './calendar.selectors';
import { searchTextSelector } from './search.selectors';

export function flightsListSelector(state) {
  const mode = modeSelector(state);
  const flights = state.dashboard.flightsList[mode];
  if (!flights) {
    return [];
  }
  const date = dateSelector(state);
  const searchText = searchTextSelector(state).toUpperCase();
  const [timeSelectorString, airportToSearch] =
    mode === 'departure'
      ? ['timeDepShedule', 'airportToID.city_en']
      : ['timeToStand', 'airportFromID.city_en'];

  return flights
    .filter(
      ({ [timeSelectorString]: sheduleTime }) => new Date(sheduleTime).getDate() === date.getDate(),
    )
    .filter(
      ({ [airportToSearch]: airport, 'carrierID.IATA': carrier, fltNo }) =>
        airport.toUpperCase().includes(searchText) ||
        (carrier + fltNo).toUpperCase().includes(searchText),
    )
    .sort((a, b) => new Date(a[timeSelectorString]) - new Date(b[timeSelectorString]));
}
