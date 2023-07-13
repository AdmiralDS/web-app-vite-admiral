import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import styled from 'styled-components';
import { T, Link } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <T font="Subtitle/Subtitle 1" as="p">
          Edit <code>src/App.tsx</code> and save to test HMR
        </T>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Link appearance="primary" href="https://admiralds.github.io/react-ui" target="_blank" rel="noopener noreferrer">
        Admiral Storybook
        <Divider />
        <ArrowRightOutline width={20} />
      </Link>
    </>
  );
}

export default App;
