import { ExampleSection } from '#routes/-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const PaginationTwoWithInput = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection text="При количестве страниц больше 21 рядом с постраничной навигацией появляется переход на указанную страницу.">
        <PaginationTwo count={22} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
    </>
  );
};
