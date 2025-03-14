import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/canon/index.less'
import { FebRoutes } from './route';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <FebRoutes />
  </BrowserRouter>
);