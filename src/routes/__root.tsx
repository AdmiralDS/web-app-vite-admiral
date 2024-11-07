import { createRootRoute, Outlet } from '@tanstack/react-router';
import styled from 'styled-components';

import { Header } from '../components/Header/Header';
import { SideMenu } from '../components/SideMenu/SideMenu';
import useMediaQuery from '../components/useMediaQuery';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 28px;
  }
  @media (min-width: 1025px) {
    width: calc(100% - 288px);
    margin-left: 288px;
    padding: 0 56px;
  }
`;

// It's the layout component
export const Route = createRootRoute({
  component: () => {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    return (
      <>
        {!isMobile && <SideMenu />}
        <Main>
          <Header />
          <Outlet />
        </Main>
      </>
    );
  },
});
