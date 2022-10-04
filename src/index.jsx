import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
const page = document.querySelector('body');
page.addEventListener('click', e => console.log(e.target));
