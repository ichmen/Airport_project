import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/dashboard.actions';
import * as Selectors from '../actions/dashboard.selectors';
import { modeSelector } from '../actions/mode.selectors';
import FlifgtInfo from './FlightInfo';
import { dateSelector } from '../actions/calendar.selectors';
import NotFound from './NotFound';

function Dashboard({ flightsList, getAllFlights, dashBoardMode, date }) {
  useEffect(() => getAllFlights(date), [dashBoardMode]);
  console.log(flightsList);
  return (
    <>
      {flightsList.length !== 0 ? (
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
            {flightsList.map((flight, index) => (
              <FlifgtInfo key={index} dashBoardMode={dashBoardMode} {...flight} />
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound />
      )}
    </>
  );
}

const mapState = state => {
  return {
    flightsList: Selectors.flightsListSelector(state),
    dashBoardMode: modeSelector(state),
    date: dateSelector(state),
  };
};

const mapDispatch = {
  getFlights: Actions.getFlightsList,
  getAllFlights: Actions.getAllFlights,
};
export default connect(mapState, mapDispatch)(Dashboard);
