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
  { text: 'current page' },
];

export const BreadcrumbsSizes = () => {
  return (
    <Wrapper>
      <Breadcrumbs items={items} />
      <Breadcrumbs items={items} dimension="m" />
      <Breadcrumbs items={items} dimension="s" />
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/sizes')({
  component: () => <BreadcrumbsSizes />,
  staticData: {
    title: 'Breadcrumbs. Размеры',
    description: 'Компонент имеет три размера — L, M, S.',
  },
});
