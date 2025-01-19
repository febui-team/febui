import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './component/base/button/Button.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button>a</Button>
  </React.StrictMode>
);
