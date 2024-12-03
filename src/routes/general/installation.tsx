import { createFileRoute } from '@tanstack/react-router';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
// import {CopyToClipboard} from 'react-copy-to-clipboard';

import { light, dark, CodeTabMenu } from '../-helpers/main';
import { ExampleSection, Text } from '../-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const data: Array<{
  header: string;
  language: string;
  code: string[] | string;
  renderTabs: boolean;
  desc: React.ReactNode;
}> = [
  {
    header: '',
    language: 'bash',
    code: [
      `$ npm install @admiral-ds/react-ui`,
      `$ yarn add @admiral-ds/react-ui`,
      `$ pnpm add @admiral-ds/react-ui`,
      `$ bun install @admiral-ds/react-ui`,
    ],
    renderTabs: true,
    desc: (
      <>
        Библиотека @admiral-ds/react-ui – это библиотека React-компонентов, основанная на дизайн системе Admiral 2.1.
        Для установки библиотеки в вашем проекте запустите команду:
      </>
    ),
  },
  {
    header: 'Peer dependencies',
    language: 'json',
    code: `"peerDependencies": {\n\t"react": ">=16";\n\t"react-dom": ">=16";\n\t"styled-components": ">=5.1.0";\n}`,
    renderTabs: false,
    desc: 'Пожалуйста, обратите внимание, что библиотека @admiral-ds/react-ui требует установки следующих зависимостей:',
  },
  {
    header: 'Templates',
    language: 'bash',
    code: [
      `§ npm create vite@latest my-web-app -- --template react-ts\n$ cd my-web-app\n$ npm install\n$ npm install @admiral-ds/react-ui\n$ npm run dev`,
    ],
    renderTabs: false,
    desc: (
      <>
        Вы можете воспользоваться готовым шаблоном приложения с настроенной библиотекой
        https://github.com/AdmiralDS/web-app-vite-admiral.
        <Separator height={16} />
        Также вы можете создать проект с нуля и подключить к нему библиотеку, например, следующим образом:
      </>
    ),
  },
];

export const Route = createFileRoute('/general/installation')({
  component: () => {
    const theme = useTheme() || LIGHT_THEME;
    const themeStyle = theme.name == 'light' ? light : dark;
    const [installMode, setInstallMode] = useState(0);
    return (
      <>
        {data.map(({ header, desc, language, renderTabs, code }, index) =>
          renderTabs && typeof code !== 'string' ? (
            <div key={header + index}>
              <Text style={{ marginBottom: '40px' }}>{desc}</Text>
              <CodeTabMenu updaterFn={(tabId) => setInstallMode(Number(tabId))} />
              <ExampleSection key={header + index} header={header} style={{ padding: '20px' }}>
                <SyntaxHighlighter language={language} style={themeStyle}>
                  {code[installMode]}
                </SyntaxHighlighter>
              </ExampleSection>
            </div>
          ) : (
            <ExampleSection key={header + index} header={header} text={desc} style={{ padding: '20px' }}>
              <SyntaxHighlighter language={language} style={themeStyle}>
                {code}
              </SyntaxHighlighter>
            </ExampleSection>
          ),
        )}
      </>
    );
  },
  staticData: {
    title: 'Installation',
  },
});
