import Search from './Search';
import Dashboard from './Dashboard';
import CalendarWrap from './calendar/CalendarWrap';
import DashboardMode from './DashboardMode';
import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import qs from 'qs';
import { setSearchString } from '../actions/search.actions';
import { connect } from 'react-redux';

function ComponentContainer({ setSearchString }) {
  // const location = useLocation();

  // const searchParams = qs.parse(location.search.slice(1));
  // const mode = location?.path;

  // console.log(location);
  // if (searchParams?.search) {
  //   setSearchString(searchParams.search);
  // }

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
};
export default connect(null, mapDispatch)(ComponentContainer);
