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

const items1 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'current page' },
];

const items2 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'previous page' },
];

export const BreadcrumbsActiveCrumb = () => {
  return (
    <Wrapper>
      <Breadcrumbs items={items1} />
      <Breadcrumbs items={items2} lastBreadcrumbActive />
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/activeCrumb')({
  component: () => <BreadcrumbsActiveCrumb />,
  staticData: {
    title: 'Breadcrumbs. Пример с активной/неактивной последней вкладкой',
    description:
      'Последняя вкладка в компоненте может быть либо неактивной (по умолчанию), в таком случае она отображает текущее местоположение. Либо последняя вкладка активна и отображает предыдущий уровень сайта. Управляет поведением последней вкладки параметр lastBreadcrumbActive.',
  },
});
