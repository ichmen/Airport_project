import React from 'react';
import Arrivals from './Arrivals';
import Departures from './Departures';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../../App';

export default function DashboardMode() {
  return (
    <div className="flights-navigation">
      <Departures />
      <Arrivals />
    </div>
  );
}
