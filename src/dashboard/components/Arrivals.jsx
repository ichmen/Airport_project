import React from 'react';
import * as Actions from '../actions/mode.actions';
import { modeSelector } from '../actions/mode.selectors';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import ArrivalsIcon from './ArrivalsIcon';

function Arrivals({ changeFlightsMode, mode }) {
  const componentMode = 'arrival';
  return (
    <li
      className={classNames('flights-navigation__item', {
        'flights-navigation__item_active': mode === componentMode,
      })}
      onClick={() => changeFlightsMode(componentMode)}
    >
      <Link
        to="/arrivals"
        className={classNames({ 'flights-navigation__item_active': mode === componentMode })}
      >
        <ArrivalsIcon />
        Arrivals
      </Link>
    </li>
  );
}
const mapDispatch = {
  changeFlightsMode: Actions.modeChanged,
};
const mapState = store => {
  return { mode: modeSelector(store) };
};
export default connect(mapState, mapDispatch)(Arrivals);
