import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBufioCT_XhIYj5eLUixPMBk3fKRq-50AY",
  authDomain: "egarsroom.firebaseapp.com",
  projectId: "egarsroom",
  storageBucket: "egarsroom.appspot.com",
  messagingSenderId: "866983193871",
  appId: "1:866983193871:web:2ee4bc08272cbfe501627a"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();