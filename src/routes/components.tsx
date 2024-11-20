import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';

import { Title, Description, Wrapper, Preview } from './-helpers/main';

export const Route = createFileRoute('/components')({
  component: () => {
    const matches = useChildMatches();
    return (
      <>
        {matches.map(({ id, staticData }) => {
          return (
            <Wrapper key={id}>
              {staticData.title && <Title>{staticData.title}</Title>}
              {staticData.description && <Description>{staticData.description}</Description>}
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
