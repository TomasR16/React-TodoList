import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//Run App js put application inside div root 
//time tutorial 53:40
ReactDOM.render(<App />, document.getElementById('root'));