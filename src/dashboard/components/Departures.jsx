import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/mode.actions';
import { modeSelector } from '../actions/mode.selectors';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import DeparturesIcon from './DeparturesIcon';

function Departures({ changeFlightsMode, mode }) {
  const componentMode = 'departure';
  return (
    <li className="flights-navigation__item" onClick={() => changeFlightsMode(componentMode)}>
      <Link
        to="/departures"
        className={classNames({ 'flights-navigation__item_active': mode === componentMode })}
      >
        <DeparturesIcon />
        Departures
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
export default connect(mapState, mapDispatch)(Departures);
