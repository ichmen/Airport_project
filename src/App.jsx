import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './dashboard/components/Dashboard';
import { store } from './dashboard/actions/dashboard.store';
import DashboardMode from './dashboard/components/DashboardMode';
import CalendarWrap from './dashboard/components/calendar/CalendarWrap';
import Static from './dashboard/components/Static';

function App() {
  return (
    <Provider store={store}>
      <Static />
      <DashboardMode />
      <CalendarWrap />
      <Dashboard />
    </Provider>
  );
}

export default App;
