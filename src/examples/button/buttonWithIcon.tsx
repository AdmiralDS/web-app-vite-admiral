import styled from 'styled-components';

import { Button, TooltipHoc } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection } from '#examples/-helpers';

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;

const ButtonWithTooltip = TooltipHoc(Button);

export const ButtonWithIcon = () => {
  return (
    <>
      <ExampleSection text="Для дополнительных акцентов и более прозрачных действий могут применяться кнопки с иконками и текстом. Нельзя использовать рядом кнопку с текстом и кнопку с текстом и иконкой. Но можно использовать кнопку с текстом рядом с кнопкой-иконкой. Иконка может быть как слева от надписи, так и справа.">
        <WrapperButton>
          <Button dimension="xl" appearance="primary" iconStart={<StarSolid />}>
            Icon start
          </Button>
          <Button dimension="xl" appearance="primary" iconEnd={<StarSolid />}>
            Icon end
          </Button>
        </WrapperButton>
      </ExampleSection>
      <ExampleSection text="В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки значениях которых общепонятны и не вызывают сомнений. Однако, при ховере под такой кнопкой появляется подсказка со значением кнопки.">
        <WrapperButton>
          <ButtonWithTooltip displayAsSquare iconStart={<StarSolid />} renderContent={() => 'Tooltip'} />
        </WrapperButton>
      </ExampleSection>
    </>
  );
};
