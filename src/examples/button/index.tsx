import styled from 'styled-components';
import { Button } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection } from '#routes/-helpers/examples';

const ButtonContainer = styled.div`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }
`;

export const ButtonBasic = () => {
  return (
    <ExampleSection
      text="Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных
          действий могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
          (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это
          иконки, значения которых общепонятны и не вызывают сомнений. Рекомендованные отступы между рядом стоящими
          кнопками: 16px в стандартных ситуациях."
    >
      <ButtonContainer>
        <Button>Button 56</Button>
        <Button iconStart={<StarSolid />}>Button 56</Button>
        <Button iconEnd={<StarSolid />}>Button 56</Button>
        <Button iconStart={<StarSolid />} displayAsSquare />
      </ButtonContainer>
    </ExampleSection>
  );
};
