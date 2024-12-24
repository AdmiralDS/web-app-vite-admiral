import { createFileRoute, Outlet, useChildMatches } from '@tanstack/react-router';

import { Title, Description, Wrapper, Preview } from './-helpers/main';

/** TODO: если в дальнейшем структура будет совпадать с разделом Components, то объединить их вместе  */

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

export const Route = createFileRoute('/general')({
  component: RouteComponent,
});
