import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './dashboard/components/Dashboard';
import { store } from './dashboard/actions/dashboard.store';
import DashboardMode from './dashboard/components/DashboardMode';
import CalendarWrap from './dashboard/components/calendar/CalendarWrap';
import Search from './dashboard/components/Search';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Search />
        <DashboardMode />
        <CalendarWrap />
        <Dashboard />
      </Router>
    </Provider>
  );
}

export default App;
