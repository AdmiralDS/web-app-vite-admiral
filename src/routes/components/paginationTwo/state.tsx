import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);

  return (
    <>
      <ExampleSection
        header="Disabled"
        text="Если какая-то страница недоступна. Так же блокируются стрелки в крайних состояниях"
      >
        <PaginationTwo
          style={{ marginBottom: '40px' }}
          count={7}
          page={state}
          disabledPages={[3]}
          onChange={(_, page: number) => setState(page)}
        />
        <PaginationTwo count={7} page={state2} disabledPages={[7]} onChange={(_, page: number) => setState2(page)} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/state')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Состояния',
  },
});
