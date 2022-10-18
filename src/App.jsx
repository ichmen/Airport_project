import React from 'react';
import { Provider } from 'react-redux';
import { store } from './dashboard/actions/dashboard.store';
import { BrowserRouter as Router } from 'react-router-dom';
import ComponentContainer from './dashboard/components/ComponentContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ComponentContainer />
      </Router>
    </Provider>
  );
}

export default App;
