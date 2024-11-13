import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';
import styled from 'styled-components';

import { Title, Description, Wrapper } from './-helpers/main';

const Preview = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Route = createFileRoute('/components')({
  component: () => {
    const matches = useChildMatches();
    return (
      <>
        {matches.map((match) => {
          return (
            <Wrapper key={match.id}>
              <Title>{(match.staticData as any).title || ''}</Title>
              <Description>{(match.staticData as any).description || ''}</Description>
              <Preview>
                <Outlet />
              </Preview>
            </Wrapper>
          );
        })}
      </>
    );
  },
});
