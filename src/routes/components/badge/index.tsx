import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Badge } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  align-self: flex-start;
`;

export const BadgeBasic = () => {
  return (
    <>
      <Layout>
        <Badge>4</Badge>
      </Layout>
    </>
  );
};

export const Route = createFileRoute('/components/badge/')({
  component: () => <BadgeBasic />,
  staticData: {
    title: 'Badge. Базовый пример',
    description: 'Небольшое описание функционала',
  },
});
