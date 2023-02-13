import * as Gateway from '../../gateway/gateway';
export const FLIGTS_LIST_LOADED = 'FLIGHTS/FLIGTS_LIST_LOADED';
export const FLIGHTS_IS_LOADED_TOGGLE = 'FLIGHTS/FLIGHTS_IS_LOADED_TOGGLE';

export function flightsListLoaded(flightsList) {
  return {
    type: FLIGTS_LIST_LOADED,
    payload: {
      flightsList,
    },
  };
}

export function getAllFlights(date = new Date('9-10-2021')) {
  function thunkAction(dispatch) {
    try {
      Gateway.fetchFlights(date)
        .then(({ body }) => dispatch(flightsListLoaded(body)))
        .catch(e => null);
    } catch (e) {
      alert("Can't fetch or bad data");
    }
  }
  return thunkAction;
}

export function toogleIsLoaded() {
  return {
    type: FLIGHTS_IS_LOADED_TOGGLE,
  };
}
