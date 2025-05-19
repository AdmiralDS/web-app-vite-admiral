import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { useState, useMemo } from 'react';
import { Link } from '@admiral-ds/react-ui';

import { CodeTabMenu, CodeBlock } from '../-helpers/general';
import { SectionDescription } from '../../examples/-helpers';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

function Description() {
  const [installMode, setInstallMode] = useState(0);
  const code = useMemo(
    () => [
      `$ npm install @admiral-ds/react-ui`,
      `$ yarn add @admiral-ds/react-ui`,
      `$ pnpm add @admiral-ds/react-ui`,
      `$ bun install @admiral-ds/react-ui`,
    ],
    [],
  );
  return (
    <>
      Библиотека @admiral-ds/react-ui – это библиотека React-компонентов, основанная на дизайн системе Admiral 2.1. Для
      установки библиотеки в вашем проекте запустите команду:
      <CodeTabMenu updaterFn={(tabId) => setInstallMode(Number(tabId))} style={{ margin: '40px 0 16px' }} />
      <CodeBlock language="bash">{code[installMode]}</CodeBlock>
    </>
  );
}

function RouteComponent() {
  return (
    <>
      <div>
        <SectionDescription
          header="Peer dependencies"
          text="Пожалуйста, обратите внимание, что библиотека @admiral-ds/react-ui требует установки следующих зависимостей:"
        />
        <CodeBlock language="json">{`"peerDependencies": {\n\t"react": ">=16";\n\t"react-dom": ">=16";\n\t"styled-components": ">=5.1.0";\n}`}</CodeBlock>
      </div>
      <div>
        <SectionDescription
          header="Templates"
          text={
            <>
              Вы можете воспользоваться&nbsp;
              <Link
                dimension="s"
                style={{ display: 'inline-flex' }}
                href="https://github.com/AdmiralDS/web-app-vite-admiral/tree/template"
                target="_blank"
              >
                готовым шаблоном
              </Link>
              &nbsp; приложения с настроенной библиотекой.
              <Separator height={12} />
              Также вы можете создать проект с нуля и подключить к нему библиотеку, например, следующим образом:
            </>
          }
        />
        <CodeBlock language="bash">
          {`$ npm create vite@latest my-web-app -- --template react-ts\n$ cd my-web-app\n$ npm install\n$ npm install @admiral-ds/react-ui\n$ npm run dev`}
        </CodeBlock>
      </div>
    </>
  );
}

export const Route = createFileRoute('/general/installation')({
  component: RouteComponent,
  staticData: {
    title: 'Installation',
    description: <Description />,
  },
});
