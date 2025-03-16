import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';

import { Title, Description, Wrapper, Preview } from './-helpers/main';

function convertPathToSourceFile(path: string) {
  let source = path;
  source = source.replace('/components', 'src/examples');
  source = source + (source.endsWith('/') ? 'index.tsx' : '.tsx');
  return source;
}

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
            <Description $grey>Расположение исходного кода: {convertPathToSourceFile(pathname)}</Description>
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
