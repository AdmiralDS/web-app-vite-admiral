import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);

  return (
    <>
      <ExampleSection text="Опционально можно показывать количество записей:">
        <PaginationTwo
          count={7}
          page={state}
          pageSize={20}
          totalItems={130}
          onChange={(_, page: number) => setState(page)}
          style={{ marginBottom: '40px' }}
        />
        <PaginationTwo
          count={22}
          page={state2}
          pageSize={10}
          totalItems={215}
          onChange={(_, page: number) => setState2(page)}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/entries')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Количество записей',
  },
});
