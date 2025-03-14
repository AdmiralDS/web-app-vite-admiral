import { ExampleSection } from '#routes/-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const PaginationTwoPages = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection text="Если страниц больше 7, то через многоточие указывается ссылка на последнюю страницу в последовательности.">
        <PaginationTwo count={16} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
    </>
  );
};
