import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { List } from "./Ulist";
import { Last } from "./Last";

ReactDOM.render(
  <div><App name="AQIB SHAH" /><List/><Last/></div>,
  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<div><App/>Hello World</div>,
//document.getElementById('root'));