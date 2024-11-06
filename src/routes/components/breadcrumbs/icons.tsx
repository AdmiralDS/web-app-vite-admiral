import styled from 'styled-components';
import { createFileRoute } from '@tanstack/react-router';
import { Breadcrumbs } from '@admiral-ds/react-ui';

import HomeOutline from '@admiral-ds/icons/build/system/HomeOutline.svg?react';
import JpgOutline from '@admiral-ds/icons/build/documents/JpgOutline.svg?react';

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
  { url: '#', text: 'page 1', iconStart: <HomeOutline /> },
  { url: '#', text: 'page 2222222222222222222222222222222222222222', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 3', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 4', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 5', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 6', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 7', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 8', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 9', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 10', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 11', iconStart: <JpgOutline /> },
  { text: 'current page' },
];

export const BreadcrumbsIcons = () => {
  return (
    <Wrapper>
      <Breadcrumbs items={items} dropContainerClassName="dropContainerClass" />
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/breadcrumbs/icons')({
  component: () => <BreadcrumbsIcons />,
  staticData: {
    title: 'Breadcrumbs. Пример вкладок с иконками',
    description:
      'При необходимости в любой хлебной крошке можно отобразить иконку слева от текста, для этого у хлебной крошки должен быть задан параметр iconStart.',
  },
});
