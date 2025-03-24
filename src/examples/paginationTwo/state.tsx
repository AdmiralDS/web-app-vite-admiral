import { ExampleSection } from '#examples/-helpers';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const PaginationTwoState = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection
        header="Disabled"
        text="При необходимости можно заблокировать требуемые страницы. Также блокируются стрелки в крайних состояниях."
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
