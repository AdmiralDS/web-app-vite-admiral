import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { FloatingButton } from '@admiral-ds/react-ui';
import ChatOutline from '@admiral-ds/icons/build/category/ChatOutline.svg?react';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const FloatingButtonTooltip = () => {
  return (
    <ExampleSection
      text={
        <>
          Иконка внутри FloatingButton должна быть однозначной и понятной. Для пояснения значения иконки можно
          использовать Tooltip c подсказкой. Для того чтобы задать текст подсказки используйте параметр tooltip.
          <br />
          <br />
          По дефолту Tooltip появляется слева от кнопки при ховере. Можно настроить появление тултипа справа, снизу,
          сверху, в зависимости от расположения кнопки, для этого используйте параметр tooltipPosition.
          <br />
          <br />В случае, когда смысл кнопки очевиден, тултип можно не использовать.
        </>
      }
    >
      <Container>
        <FloatingButton tooltip="Написать в чат">
          <ChatOutline />
        </FloatingButton>
      </Container>
    </ExampleSection>
  );
};
