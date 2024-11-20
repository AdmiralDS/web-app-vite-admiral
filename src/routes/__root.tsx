import { createRootRoute, Outlet } from '@tanstack/react-router';
import styled from 'styled-components';
import { useState, useLayoutEffect } from 'react';
import type { CSSProperties } from 'react';

import { Header, SideMenu, useMediaQuery, getScrollbarSize } from '../layoutComponents';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;

  @media (max-width: 1024px) {
    width: 100%;
    padding-inline: calc(28px - var(--scrollbar-width, '0px'));
  }
  @media (min-width: 1025px) {
    width: calc(100% - 288px);
    margin-left: 288px;
    padding-inline: calc(56px - var(--scrollbar-width, '0px'));
  }
`;

// It's the layout component
export const Route = createRootRoute({
  component: () => {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const [scrollbar, setScrollbar] = useState('0px');

    useLayoutEffect(() => {
      setScrollbar(getScrollbarSize() + 'px');
    }, []);

    return (
      <>
        {!isMobile && <SideMenu />}
        <Main style={{ '--scrollbar-width': scrollbar } as CSSProperties}>
          <Header />
          <Outlet />
        </Main>
      </>
    );
  },
});
