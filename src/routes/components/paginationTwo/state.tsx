import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection
        header="Disabled"
        text="При необходимости можно заблокировать требуемые страницы. Также блокируются стрелки в крайних состоянияхю"
      >
        <PaginationTwo
          style={{ marginBottom: '40px' }}
          count={7}
          page={state}
          disabledPages={[3, 7]}
          onChange={(_, page: number) => setState(page)}
        />
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
