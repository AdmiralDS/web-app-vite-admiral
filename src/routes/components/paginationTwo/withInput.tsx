import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection text="Если страниц больше 21, то можно вводить номер страницы вручную через поле ввода:">
        <PaginationTwo count={22} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/withInput')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Ввод номера страницы вручную',
  },
});
