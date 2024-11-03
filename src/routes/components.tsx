import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';
import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 40px 0 28px;

  @media (min-width: 1600px) {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
  }
`;

const Title = styled.h5`
  ${typography['Header/H5']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin: 0;
  padding: 0;
`;

const Description = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  margin-top: 8px;
`;

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
