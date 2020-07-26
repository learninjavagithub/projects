import React from 'react';
import { withRouter, BrowserRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Store.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/react-redux-config"}>
    	<Provider store={store}>
    		<Route path="/" component={withRouter(App)} />
    	</Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
