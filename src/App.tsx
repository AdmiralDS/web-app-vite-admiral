import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import { TableLoadOnScroll } from './table/example1';
import { TableLoadOnScrollSpinner } from './table/example2';
import { TableLoadOnScrollSkeleton } from './table/example3';

// Импорт иконки как URL ресурс. Это дефолтное поведене для vite (https://vitejs.dev/guide/assets.html#importing-asset-as-url)
import reactLogo from './assets/react.svg';

// Импорт оптимизированной иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
import ArrowRightOutline from '@admiral-ds/icons/build/category/CreatePullRequestSolid.svg?react';

// Импорт оригинала иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
import BusSolid from '@admiral-ds/icons/public/icons/category/Bus Solid.svg?react';

// Импорт иконки как готового реакт компонента (лоадер не требуется)
import { CategoryBusOutline } from '@admiral-ds/icons';

import { T, Link, Spinner } from '@admiral-ds/react-ui';
import { SomeComponent } from './SomeComponent';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SomeComponent />
        <a href="https://vitejs.dev" target="_blank">
          {/* импорт иконки через директорию assets. Доступ к этой директории есть и у index.html */}
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <T font="Subtitle/Subtitle 1" as="p">
          Edit <code>src/App.tsx</code> and save to test HMR
        </T>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Link appearance="primary" href="https://admiralds.github.io/react-ui" target="_blank" rel="noopener noreferrer">
        Admiral Storybook
        <Divider />
        <ArrowRightOutline width={20} />
        <CategoryBusOutline width={20} />
        <BusSolid width={20} />
        <Spinner />
      </Link>
      <div className="tables">
        <h3>Taблица с подгрузкой данных при скролле</h3>
        <TableLoadOnScroll />
        <h3>Taблица со спиннером и подгрузкой данных при скролле</h3>
        <TableLoadOnScrollSpinner />
        <h3>Taблица со скелетонами и подгрузкой данных при скролле</h3>
        <TableLoadOnScrollSkeleton />
      </div>
    </>
  );
}

export default App;
