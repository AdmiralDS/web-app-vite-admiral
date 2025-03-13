import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { FloatingButton } from '@admiral-ds/react-ui';
import PersonSolid from '@admiral-ds/icons/build/system/PersonSolid.svg?react';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const Template = () => {
  return (
    <ExampleSection>
      <Container>
        <FloatingButton>
          <PersonSolid />
        </FloatingButton>
      </Container>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/floatingButton/')({
  component: () => <Template />,
  staticData: {
    title: 'FloatingButton. Базовый пример',
    description:
      'Компонент FloatingButton используется для отображения наиболее частых или важных действий на экране. Не рекомендуется использовать более одной FloatingButton на экране.',
  },
});
