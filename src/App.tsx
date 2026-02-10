import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, DARK_THEME, LightThemeCssVars, DarkThemeCssVars } from '@admiral-ds/react-ui';
import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { SettingsContext } from './SettingsContext';
import type { Theme, CSSPropsIn } from './SettingsContext';
import { createBorderRadiusSwapper } from './createBorderRadiusSwapper';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_PATH,
  history: createHashHistory(), // Hash history лучше для GitHub Pages
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    title?: ReactNode;
    description?: ReactNode;
  }
}

// нужен для примера Select.Ассинхронный поиск
const queryClient = new QueryClient();

function App() {
  const [theme, toggleTheme] = useState<Theme>('light');
  const [CSSProps, setCSSProps] = useState<CSSPropsIn>('enable');
  const [borderRadius, setBorderRadius] = useState<BorderRadiusType>('Border radius 4');

  useEffect(() => {
    document.body.classList.add(`admiral-theme-${theme === 'dark' ? 'dark' : 'light'}`);
    document.body.classList.remove(`admiral-theme-${theme === 'dark' ? 'light' : 'dark'}`);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContext.Provider value={{ theme, toggleTheme, CSSProps, setCSSProps, borderRadius, setBorderRadius }}>
        <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
          {CSSProps === 'enable' ? theme === 'light' ? <LightThemeCssVars /> : <DarkThemeCssVars /> : null}
          <ThemeProvider theme={createBorderRadiusSwapper(borderRadius, CSSProps)}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ThemeProvider>
      </SettingsContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
