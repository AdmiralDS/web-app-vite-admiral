import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';

import { Title, Description, Wrapper, Preview } from './-helpers/main';

function RouteComponent() {
  const matches = useChildMatches();
  // не продуман момент с index.tsx файлом
  return (
    <>
      {matches.map(({ id, staticData, pathname }) => {
        return (
          <Wrapper key={id}>
            {staticData.title && <Title>{staticData.title}</Title>}
            {staticData.description && <Description $grey>{staticData.description}</Description>}
            <Description $grey>Исходный код: {pathname.replace('/components', 'src/examples') + '.tsx'}</Description>
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
