import { createRootRoute, Outlet } from '@tanstack/react-router';
import styled from 'styled-components';

import { Header } from '../components/Header/Header';
import { SideMenu } from '../components/SideMenu/SideMenu';
import useMediaQuery from '../components/useMediaQuery';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 28px;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});

  @media (min-width: 1025px) {
    width: calc(100% - 288px);
    margin-left: 288px;
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
