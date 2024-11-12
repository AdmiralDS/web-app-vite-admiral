import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';
import styled from 'styled-components';

import { Title, Description, Wrapper } from './-helpers/main';

const Preview = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 28px;
  margin-top: 24px;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
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
