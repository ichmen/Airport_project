import React from 'react';
import * as Actions from '../actions/mode.actions';
import { modeSelector } from '../actions/mode.selectors';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import ArrivalsIcon from './iconComponents/ArrivalsIcon';

function Arrivals({ changeFlightsMode, mode }) {
  const componentMode = 'arrival';
  const location = useLocation();
  return (
    <Link
      to={'/arrivals' + location.search}
      className={classNames('flights-navigation__item', {
        'flights-navigation__item_active': mode === componentMode,
      })}
      onClick={() => changeFlightsMode(componentMode)}
    >
      <ArrivalsIcon />
      Arrivals
    </Link>
  );
}
const mapDispatch = {
  changeFlightsMode: Actions.modeChanged,
};
const mapState = store => {
  return { mode: modeSelector(store) };
};
export default connect(mapState, mapDispatch)(Arrivals);
