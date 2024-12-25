import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { useState } from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';

export const Template = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(1);
  const [state4, setState4] = useState(1);
  const [state5, setState5] = useState(1);

  return (
    <>
      <ExampleSection text="Если страниц больше, чем 7, то через многоточие указывается ссылка на последнюю страницу в последовательности:">
        <PaginationTwo count={16} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
      <ExampleSection text="Если страниц больше 21, то можно вводить номер страницы вручную через поле ввода:">
        <PaginationTwo count={22} page={state2} onChange={(_, page: number) => setState2(page)} />
      </ExampleSection>
      <ExampleSection text="Если какая-то страница недоступна. Так же блокируются стрелки в крайних состояниях">
        <PaginationTwo count={7} page={state3} disabledPages={[3, 7]} onChange={(_, page: number) => setState3(page)} />
      </ExampleSection>
      <ExampleSection text="Опционально можно показывать количество записей:">
        <PaginationTwo
          count={7}
          page={state4}
          pageSize={20}
          totalItems={130}
          onChange={(_, page: number) => setState4(page)}
          style={{ marginBottom: '40px' }}
        />
        <PaginationTwo
          count={22}
          page={state5}
          pageSize={10}
          totalItems={215}
          onChange={(_, page: number) => setState5(page)}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/examples')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Примеры',
  },
});
