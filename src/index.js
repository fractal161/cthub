import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import InviteCard from './inviteCard/InviteCard';
import reportWebVitals from './reportWebVitals';
import servers from './servers.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {servers.map(server => {
      return <InviteCard code={server}></InviteCard>
    })};

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
