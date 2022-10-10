import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { setInvisible } from './dashboard/actions/calendar.actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// const page = document.querySelector('body');
// page.addEventListener('click', hideCalendarIfClickedOutside);

// function hideCalendarIfClickedOutside(event) {
//   const target = event.target;
//   console.log(target.closest('.flights__calendar'));
//   if (target.closest('.flights__calendar')) {
//     setInvisible();
//   }
// }
