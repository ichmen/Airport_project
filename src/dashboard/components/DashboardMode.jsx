import React from 'react';
import Arrivals from './Arrivals';
import Departures from './Departures';

export default function DashboardMode() {
  return (
    <div className="flights-navigation">
      <Departures />
      <Arrivals />
    </div>
  );
}
