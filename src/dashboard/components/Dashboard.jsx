import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/dashboard.actions';
import * as Selectors from '../actions/dashboard.selectors';
import FlifgtInfo from './FlightInfo';

function Dashboard({ getFlights, tasksList }) {
  useEffect(() => getFlights(), []);
  console.log(tasksList);
  return (
    <table className="flights-table">
      <thead className="flights-table__head">
        <tr className="dashboard-head">
          <th className="flights-table__head">Terminal</th>
          <th className="flights-table__head">Local time</th>
          <th className="flights-table__head">Destination</th>
          <th className="flights-table__head">Status</th>
          <th className="flights-table__head">Airline</th>
          <th className="flights-table__head">Flight</th>
          <th className="flights-table__head"></th>
        </tr>
      </thead>
      <tbody className="flights-table__body">
        {tasksList.map((flight, index) => (
          <FlifgtInfo key={index} {...flight} />
        ))}
      </tbody>
    </table>
  );
}

const mapState = state => {
  return { tasksList: Selectors.flightsListSelector(state) };
};

const mapDispatch = {
  getFlights: Actions.getFlightsList,
};
export default connect(mapState, mapDispatch)(Dashboard);
