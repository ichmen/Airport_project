import React from 'react';
import { fetchFlights } from '../../gateway/gateway';
import { dateWithOffset } from '../../utils/utils';
export default function Dashboard() {
  const date = new Date('9-10-2021');
  fetchFlights(date).then(({ body: { arrival } }) =>
    arrival
      .filter(({ timeToStand }) => dateWithOffset(timeToStand).getDate() === date.getDate())
      .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand))
      .forEach(element => {
        console.log(element['airportFromID.city_en'], element.timeToStand, element.term);
      }),
  );
  return (
    <table>
      <thead className="table-head">
        <tr className="dashboard-head">
          <th className="table-head">Terminal</th>
          <th className="table-head">Local time</th>
          <th className="table-head">Destination</th>
          <th className="table-head">Status</th>
          <th className="table-head">Airline</th>
          <th className="table-head">Flight</th>
          <th className="table-head"></th>
        </tr>
      </thead>
    </table>
  );
}
