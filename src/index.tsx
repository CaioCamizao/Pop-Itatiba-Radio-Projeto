import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const renderApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(renderApp());

reportWebVitals();
