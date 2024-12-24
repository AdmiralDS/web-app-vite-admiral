import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { useMemo } from 'react';
import { Link } from '@admiral-ds/react-ui';

import { CodeBlock } from '../-helpers/general';
import { SectionDescription } from '../-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

function Description() {
  const code = useMemo(
    () => `
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
    );`,
    [],
  );
  return (
    <>
      Для корректной работы @admiral-ds/react-ui требуется использовать компоненты ThemeProvider, FontsVTBGroup и
      DropdownProvider, их рекомендуется подключать в корне проекта:
      <Separator height={16} />
      <CodeBlock language="javascript">{code}</CodeBlock>
    </>
  );
}

function RouteComponent() {
  return (
    <>
      <SectionDescription
        header="Theme Provider"
        text={
          <>
            Для корректного отображения стилей компоненты из библиотеки @admiral-ds/react-ui должны иметь доступ к
            объекту темы. Это реализуется с помощью компонента ThemeProvider из библиотеки styled-components, в котором
            в параметре theme необходимо указать объект темы или функцию, возвращающую объект темы. Подробнее об этом
            можно почитать здесь:&nbsp;
            <Link
              dimension="s"
              style={{ display: 'inline-flex' }}
              href="https://styled-components.com/docs/advanced#theming"
              target="_blank"
            >
              Theming
            </Link>
            &nbsp; и&nbsp;
            <Link
              dimension="s"
              style={{ display: 'inline-flex' }}
              href="https://styled-components.com/docs/advanced#function-themes"
              target="_blank"
            >
              Function themes
            </Link>
            .
            <Separator height={12} />
            Библиотека @admiral-ds/react-ui по умолчанию предоставляет 2 варианта тем: LIGHT_THEME и DARK_THEME.
            <Separator height={12} />В рамках своего проекта можно использовать несколько вложенных друг в друга
            ThemeProvider. В таком случае, если компонент обернут в несколько провайдеров, компонент будет использовать
            тему из ближайшего к нему ThemeProvider. Подробнее об этом:&nbsp;
            <Link
              dimension="s"
              style={{ display: 'inline-flex' }}
              href="https://dev.to/boywithsilverwings/theming-with-styled-components-3ig2"
              target="_blank"
            >
              Theming with Styled Components
            </Link>
            .
            <Separator height={12} />
            ВАЖНО!!! Использование ThemeProvider обязательно, отсутствие ThemeProvider будет вызывать ошибки в коде
          </>
        }
      />
      <SectionDescription
        header="Fonts VTB Group UI"
        text={
          <>
            Библиотека @admiral-ds/react-ui использует шрифт VTB Group UI по умолчанию. Чтобы применить данный шрифт в
            своем проекте достаточно в корне проекта подключить компонент FontsVTBGroup.
          </>
        }
      />
      <SectionDescription
        header="Dropdown Provider"
        text={
          <>
            Компонент DropdownProvider необходим для корректной работы компонентов, в состав которых входят выпадающие
            меню или всплывающие подсказки.
          </>
        }
      />
    </>
  );
}

export const Route = createFileRoute('/general/usage')({
  component: RouteComponent,
  staticData: {
    title: 'Usage',
    description: <Description />,
  },
});
