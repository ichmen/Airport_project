import Search from './Search';
import Dashboard from './Dashboard';
import CalendarWrap from './calendar/CalendarWrap';
import DashboardMode from './DashboardMode';
import React from 'react';
import { setSearchString } from '../actions/search.actions';
import { connect } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { modeChanged } from '../actions/mode.actions';

function ComponentContainer({ setSearchString, modeChanged }) {
  const location = useLocation();
  const [searchParams, _] = useSearchParams();
  console.log('container', location.pathname);
  switch (location.pathname.slice(1)) {
    case 'departures':
      modeChanged('departure');
      break;
    case 'arrivals':
      modeChanged('arrival');
      break;
    default:
      modeChanged('');
      break;
  }

  if (searchParams.has('search')) {
    setSearchString(searchParams.get('search'));
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
// withRouter(ComponentContainer);
// // setSearchString;

const mapDispatch = {
  setSearchString,
  modeChanged,
};
export default connect(null, mapDispatch)(ComponentContainer);
