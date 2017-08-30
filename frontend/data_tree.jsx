import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>HI</h1>, root);
});
