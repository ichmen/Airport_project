const baseUrl = 'https://api.iev.aero/api/flights/';
import { formatDate } from '../utils/utils';
export function fetchFlights(date = new Date()) {
  // console.log(formatDate(date));
  return fetch(baseUrl + formatDate(date)).then(response => response.json());
}

export function postTask(task) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
}
export function updateTask(task) {
  return fetch(`${baseUrl}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
}
export function deleteTask(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
}
