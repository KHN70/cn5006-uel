import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmojeeCounter from './EmojeeCounters';
//import * as serviceWorker from './serviceWorker';
import Hook_ControlledButtonState from './Counter';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love'/>
  <EmojeeCounter pic='sad'/>
  <EmojeeCounter pic='Like'/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//serviceWorker.unregister();