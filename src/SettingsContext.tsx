import { createContext } from 'react';

export type Theme = 'light' | 'dark';
export type CSSPropsIn = 'enable' | 'disable';
export type BorderRadius = '0px' | '2px' | '4px' | '6px' | '8px' | '10px';

export const SettingsContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  CSSProps: 'enable',
  setCSSProps: () => {},
  borderRadius: '4px',
  setBorderRadius: () => {},
} as {
  theme: Theme;
  toggleTheme: (theme: 'light' | 'dark') => void;
  CSSProps: CSSPropsIn;
  setCSSProps: (CSSProps: CSSPropsIn) => void;
  borderRadius?: BorderRadius;
  setBorderRadius?: (borderRadius: BorderRadius) => void;
});
