import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
  <Favicon url='https://res.cloudinary.com/sismographie-cloud/image/upload/v1676042894/stuff/Trollface_bk61s5.png' />
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
