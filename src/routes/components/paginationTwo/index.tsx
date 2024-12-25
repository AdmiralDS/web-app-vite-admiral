import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { PaginationTwo } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

export const PStyled = styled.p`
  margin-bottom: 20px;
`;

export const Template = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент используется для навигации по длинным спискам, где информация разбивается на страницы.
            </PStyled>
            <PStyled>
              Старайтесь подбирать размер страницы таким образом, чтобы она была не больше 3-4 экранов пользователя. За
              базовый экран принимается экран с разрешением 1280×720px.
            </PStyled>
            <PStyled>
              Используйте для количества страниц не более 999 (три знака). Для большего количества страниц используйте
              компонент Pagination One.
            </PStyled>
            Если страниц 7 или меньше, то выводится полный перечень страниц без сокращений:
          </>
        }
      >
        <PaginationTwo count={7} page={state} onChange={(_, page: number) => setState(page)} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/paginationTwo/')({
  component: () => <Template />,
  staticData: {
    title: 'PaginationTwo. Базовый пример',
    description: '',
  },
});
