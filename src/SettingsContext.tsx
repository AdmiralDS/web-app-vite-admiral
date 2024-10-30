import { createContext } from 'react';
import type { BorderRadiusType } from '@admiral-ds/react-ui';

export type Theme = 'light' | 'dark';
export type CSSPropsIn = 'enable' | 'disable';

export const SettingsContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  CSSProps: 'enable',
  setCSSProps: () => {},
  borderRadius: 'Border radius 4',
  setBorderRadius: () => {},
} as {
  theme: Theme;
  toggleTheme: (theme: 'light' | 'dark') => void;
  CSSProps: CSSPropsIn;
  setCSSProps: (CSSProps: CSSPropsIn) => void;
  borderRadius: BorderRadiusType;
  setBorderRadius: (borderRadius: BorderRadiusType) => void;
});
