import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';

import { Title, Description, Wrapper, Preview } from './-helpers/main';

function RouteComponent() {
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
}

export const Route = createFileRoute('/components')({
  component: RouteComponent,
});
