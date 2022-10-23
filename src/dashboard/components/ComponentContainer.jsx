import Search from './Search';
import Dashboard from './Dashboard';
import CalendarWrap from './CalendarWrap';
import DashboardMode from './DashboardMode';
import React from 'react';
import { setSearchString } from '../actions/search.actions';
import { connect } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { modeChanged } from '../actions/mode.actions';
import { setDate } from '../actions/calendar.actions';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ComponentContainer({ setSearchString, modeChanged, setDate }) {
  const location = useLocation();
  const [searchParams, _] = useSearchParams();
  useEffect(() => readUrlData(), []);

  function readUrlData() {
    if (searchParams.has('search')) {
      setSearchString(searchParams.get('search'));
    }
    switch (location.pathname.slice(1)) {
      case 'departures':
        modeChanged('departure');
        break;
      case 'arrivals':
        modeChanged('arrival');
        break;
    }

    if (searchParams.has('date')) {
      const [day, month, year] = searchParams.get('date').split('-');
      setDate(new Date(`${month}-${day}-${year}`));
    }
  }
  return (
    <>
      <Search />
      <DashboardMode />
      <CalendarWrap />
      <Dashboard />
    </>
  );
}

const mapDispatch = {
  setSearchString,
  modeChanged,
  setDate,
};
export default connect(null, mapDispatch)(ComponentContainer);

ComponentContainer.propTypes = {
  setSearchString: PropTypes.func.isRequired,
  modeChanged: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};
