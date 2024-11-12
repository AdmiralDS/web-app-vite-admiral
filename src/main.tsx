import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DropdownProvider>
      <FontsVTBGroup />
      <App />
    </DropdownProvider>
  </React.StrictMode>,
);
