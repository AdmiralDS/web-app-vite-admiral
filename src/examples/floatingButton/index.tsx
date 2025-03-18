import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { FloatingButton } from '@admiral-ds/react-ui';
import PersonSolid from '@admiral-ds/icons/build/system/PersonSolid.svg?react';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const FloatingButtonBasic = () => {
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
