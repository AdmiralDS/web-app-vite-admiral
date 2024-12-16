import { createFileRoute } from '@tanstack/react-router';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { light, dark, CodeTabMenu } from '../-helpers/main';
import { ExampleSection, Text } from '../-helpers/examples';

const data: Array<{
  header: string;
  language: string;
  code: string[] | string;
  renderTabs: boolean;
  desc: React.ReactNode;
}> = [
  {
    header: 'Templates',
    language: 'typescript',
    code: [
      `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { ThemeProvider } from 'styled-components';\nimport { LIGHT_THEME, 
      FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';\nimport App from './App';\nimport './index.css';\n\nReactDOM.createRoot(document.
      getElementById('root')!).render(\n<React.StrictMode>\n<ThemeProvider 
      theme={LIGHT_THEME}>\n<DropdownProvider>\n<FontsVTBGroup />\n<App />\n</DropdownProvider>\n</ThemeProvider>\n</React.StrictMode>,\n);`,
    ],
    renderTabs: false,
    desc: (
      <>
        Для корректной работы @admiral-ds/react-ui требуется использовать компоненты ThemeProvider, FontsVTBGroup и
        DropdownProvider, их рекомендуется подключать в корне проекта:
      </>
    ),
  },
];

const text = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);`;

function RouteComponent() {
  const theme = useTheme() || LIGHT_THEME;
  const themeStyle = theme.name == 'light' ? light : dark;
  return (
    <SyntaxHighlighter language={data[0].language} style={themeStyle}>
      {text}
    </SyntaxHighlighter>
  );
}

export const Route = createFileRoute('/general/usage')({
  component: RouteComponent,
  staticData: {
    title: 'Usage',
  },
});
