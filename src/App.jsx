import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './dashboard/components/Dashboard';
import { store } from './dashboard/actions/dashboard.store';
import DashboardMode from './dashboard/components/DashboardMode';

function App() {
  return (
    <Provider store={store}>
      <DashboardMode />
      <Dashboard />
    </Provider>
  );
}

export default App;
