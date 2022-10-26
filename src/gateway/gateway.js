const baseUrl = 'https://api.iev.aero/api/flights/';
import { formatDate } from '../utils/utils';
import flightsPromise from '../10-9-2021';

export function fetchFlights(date = new Date()) {
  return fetch(baseUrl + formatDate(date))
    .then(response => response.json())
    .catch(() => flightsPromise)
    .then(() => alert('Failed to fetch data')); //closed ports case
}
