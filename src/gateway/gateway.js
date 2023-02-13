const baseUrl = 'https://api.iev.aero/api/flights/';
import { formatDate } from '../utils/utils';
import flightsPromise from '../10-9-2021';

export async function fetchFlights(date = new Date()) {
  return await fetch(baseUrl + formatDate(date))
    .then(response => response.json())
    .catch(e => alert(`Failed to fetch data ${e}`));
  // .then(() => alert('Failed to fetch data')); //closed ports case
}
