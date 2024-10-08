import { Link, T } from '@admiral-ds/react-ui';
// Импорт иконки как URL ресурс. Это дефолтное поведене для vite (https://vitejs.dev/guide/assets.html#importing-asset-as-url)
import reactLogo from '../../assets/react.svg';

export const MainPage = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* импорт иконки через директорию assets. Доступ к этой директории есть и у index.html */}
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <T font="Header/H2" as="div">
        Vite + React
      </T>
      <T font="Additional/L" as="div">
        Click on the Vite and React logos to learn more
      </T>
      <T font="Header/H2" as="div">
        Links
      </T>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <Link href="https://admiralds.github.io/react-ui" target="_blank" rel="noopener noreferrer">
          Admiral Storybook
        </Link>
        |
        <Link href="https://admiralds.github.io/icons/" target="_blank" rel="noopener noreferrer">
          Admiral Icons Storybook
        </Link>
      </div>
    </>
  );
};
