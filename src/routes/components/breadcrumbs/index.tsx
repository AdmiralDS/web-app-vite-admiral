import styled from 'styled-components';
import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    width: 90%;
    margin: 20px 20px;
  }
`;

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2222222222222222222222222222222222222222' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'page 5' },
  { url: '#', text: 'page 6' },
  { url: '#', text: 'page 7' },
  { url: '#', text: 'page 8' },
  { url: '#', text: 'page 9' },
  { url: '#', text: 'page 10' },
  { url: '#', text: 'page 11' },
  { text: 'current page' },
];

export const BreadcrumbsBasic = () => {
  return (
    <Wrapper>
      <Breadcrumbs items={items} dropContainerClassName="dropContainerClass" />
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/')({
  component: () => <BreadcrumbsBasic />,
  staticData: {
    title: 'Breadcrumbs. Базовый пример',
    description:
      'Вторичный элемент навигации, который позволяет пользователю понять, на каком уровне сайта он находится, и вернуться на один из предыдущих уровней.',
  },
});
