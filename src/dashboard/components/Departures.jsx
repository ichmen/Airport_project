import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/mode.actions';
import { modeSelector } from '../actions/mode.selectors';
import classNames from 'classnames';
import { Link, useHref, useLocation, useNavigation } from 'react-router-dom';
import DeparturesIcon from './DeparturesIcon';

function Departures({ changeFlightsMode, mode }) {
  const componentMode = 'departure';
  // const href = useHref();
  const location = useLocation();
  return (
    <Link
      to={'/departures' + location.search}
      className={classNames('flights-navigation__item', {
        'flights-navigation__item_active': mode === componentMode,
      })}
      onClick={() => changeFlightsMode(componentMode)}
    >
      <DeparturesIcon />
      Departures
    </Link>
  );
}

const mapDispatch = {
  changeFlightsMode: Actions.modeChanged,
};
const mapState = store => {
  return { mode: modeSelector(store) };
};
export default connect(mapState, mapDispatch)(Departures);
