import React from 'react';
import ReactDOM from 'react-dom'; // React for the document object model
import './index.css'; // Syntax ./ means that this file is in the same directory
import App from './containers/App'; // Parent of 'CardList'; render the parent to render the CardList
import reportWebVitals from './reportWebVitals';
import 'tachyons';


// CardList accepts 'robots' properties (props)
// App.js file gets mounted into the document with the idea of 'root'
// originally set in index.html file; index.html file is over-ridden 
// with App.js
ReactDOM.render(
  <React.StrictMode>
	  <App />
	    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 