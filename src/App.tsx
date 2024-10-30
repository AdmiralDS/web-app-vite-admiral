import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, DARK_THEME, LightThemeCssVars, DarkThemeCssVars, Button } from '@admiral-ds/react-ui';
import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

import './App.css';
import { SettingsContext } from './SettingsContext';
import type { Theme, CSSPropsIn } from './SettingsContext';
import { Header } from './components/Header/Header';
import { createBorderRadiusSwapper } from './createBorderRadiusSwapper';

// const Main = styled.div`
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
//   padding: 0 28px 28px 28px;
//   background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
// `;

// const Preview = styled.div`
//   display: flex;
//   flex: 0 1 auto;
//   background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
// `;

//TODO: 1) routing 2) drawer

function App() {
  const [theme, toggleTheme] = useState<Theme>('light');
  const [CSSProps, setCSSProps] = useState<CSSPropsIn>('enable');
  const [borderRadius, setBorderRadius] = useState<BorderRadiusType>('Border radius 4');

  useEffect(() => {
    document.body.classList.add(`admiral-theme-${theme === 'dark' ? 'dark' : 'light'}`);
    document.body.classList.remove(`admiral-theme-${theme === 'dark' ? 'light' : 'dark'}`);
  }, [theme]);

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, CSSProps, setCSSProps, borderRadius, setBorderRadius }}>
      <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
        {CSSProps === 'enable' ? theme === 'light' ? <LightThemeCssVars /> : <DarkThemeCssVars /> : null}
        {/* <Main className="main">
          <Header /> */}
        <ThemeProvider theme={createBorderRadiusSwapper(borderRadius, CSSProps)}>
          {/* <Preview>
              <Button>Test component</Button> */}
          <RouterProvider router={router} />
          {/* </Preview> */}
        </ThemeProvider>
        {/* </Main> */}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}

export default App;
