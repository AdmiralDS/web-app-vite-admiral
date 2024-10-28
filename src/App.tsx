import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, DARK_THEME, LightThemeCssVars, DarkThemeCssVars } from '@admiral-ds/react-ui';

import './App.css';
import { SettingsContext } from './SettingsContext';
import type { Theme, CSSPropsIn, BorderRadius } from './SettingsContext';
import { Header } from './components/Header/Header';

const Main = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px 28px 28px 28px;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
`;

function App() {
  const [theme, toggleTheme] = useState<Theme>('light');
  const [CSSProps, setCSSProps] = useState<CSSPropsIn>('enable');
  const [borderRadius, setBorderRadius] = useState<BorderRadius>('4px');

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, CSSProps, setCSSProps, borderRadius, setBorderRadius }}>
      <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
        {CSSProps === 'enable' ? theme === 'light' ? <LightThemeCssVars /> : <DarkThemeCssVars /> : null}
        <Main className={`main ${theme === 'light' ? 'admiral-theme-light' : 'admiral-theme-dark'}`}>
          <Header />
        </Main>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}

export default App;
