import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { FloatingButton } from '@admiral-ds/react-ui';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const FloatingButtonPosition = () => {
  return (
    <ExampleSection text="Кнопка FloatingButton постоянно видна на экране и не скроллится с контентом страницы. По умолчанию кнопка располагается в правом нижнем углу экрана, на расстоянии 28 px от краев экрана. Пользователь может задать свое расположение кнопки, переопределив её позиционирование через стили.">
      <Container>
        <FloatingButton>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton style={{ insetBlockEnd: '88px' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
    </ExampleSection>
  );
};
