import React from 'react';
import ReactDOM from 'react-dom'; // React < 18
// import ReactDOM from 'react-dom/client'; // React 18+
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './App';
import './index.css';

// React < 18
ReactDOM.render(
  React.createElement(() => (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  )),
  document.getElementById('root'),
);

// For React 18+
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeProvider theme={LIGHT_THEME}>
//       <DropdownProvider>
//         <FontsVTBGroup />
//         <App />
//       </DropdownProvider>
//     </ThemeProvider>
//   </React.StrictMode>,
// );
