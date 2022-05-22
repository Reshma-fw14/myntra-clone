import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import {Store} from "./components/states/store/store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

