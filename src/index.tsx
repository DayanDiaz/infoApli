import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetRoutes from './GetRoutes';
import {UserProvider} from './context/InitContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <React.StrictMode>
    <GetRoutes/>
  </React.StrictMode>
  </UserProvider>
);
