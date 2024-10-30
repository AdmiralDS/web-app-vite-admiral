import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import styled from 'styled-components';

import { Header } from '../components/Header/Header';
import { Menu } from '../components/SideMenu';

const Main = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 28px 28px 28px;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
`;

const Preview = styled.div`
  display: flex;
  flex: 0 1 auto;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

// It's the layout component
export const Route = createRootRoute({
  component: () => (
    <>
      <Main className="main">
        <Header />
        {/* <div>
          <Link to="/">
            {({ isActive }) => {
              return <MenuItem data-selected={isActive}>Home</MenuItem>;
            }}
          </Link>
          <Link to="/about">
            {({ isActive }) => {
              return <MenuItem data-selected={isActive}>About</MenuItem>;
            }}
          </Link>
        </div> */}
        <Menu />
        <Preview>
          <Outlet />
        </Preview>
      </Main>
    </>
  ),
});
