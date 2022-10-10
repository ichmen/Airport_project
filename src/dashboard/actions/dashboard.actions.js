import * as Gateway from '../../gateway/gateway';
import { dateWithOffset } from '../../utils/utils';
import { calendarDatesToShow } from '../components/calendar/calendar.utils';
export const FLIGTS_LIST_LOADED = 'FLIGHTS/FLIGTS_LIST_LOADED';

export function flightsListLoaded(flightsList) {
  return {
    type: FLIGTS_LIST_LOADED,
    payload: {
      flightsList,
    },
  };
}

export function getFlightsList(date = new Date('9-10-2021')) {
  function thunkAction(dispatch) {
    Gateway.fetchFlights(date)
      .then(({ body: { arrival } }) =>
        arrival
          .filter(({ timeToStand }) => dateWithOffset(timeToStand).getDate() === date.getDate())
          .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand)),
      )
      .then(flightsList => dispatch(flightsListLoaded(flightsList)));
  }
  return thunkAction;
}

export function getAllFlights(date = new Date('9-10-2021')) {
  function thunkAction(dispatch) {
    Gateway.fetchFlights(date).then(({ body }) => dispatch(flightsListLoaded(body)));
  }
  return thunkAction;
}
