import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection text="Если страниц больше, чем 7, то через многоточие указывается ссылка на последнюю страницу в последовательности:">
        <PaginationTwo count={16} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/pages')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Количество страниц',
  },
});
