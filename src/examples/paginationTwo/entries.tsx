import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection text="Опционально можно показывать количество записей.">
        <PaginationTwo
          showInput={false}
          count={22}
          page={state}
          pageSize={10}
          totalItems={215}
          onChange={(_, page: number) => setState(page)}
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
