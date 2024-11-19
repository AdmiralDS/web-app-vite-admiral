import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button, ButtonAppearance } from '@admiral-ds/react-ui';
import { ExampleSection, Text } from '../../-helpers/examples';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(7, 1fr);
`;

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>`
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
`;

const StyledText = styled(Text)`
  padding: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonBasic = () => {
  return (
    <ExampleSection text="В зависимости от контекста применяются разные виды кнопок, но следует помнить, что использование на странице больше одной главной (Primary) кнопки нежелательно.">
      <GridContainer>
        <ButtonContainer>
          <Button appearance="primary">Primary button</Button>
        </ButtonContainer>
        <StyledText>
          Основная кнопка. Используется для самых важных действий. Желательно использовать одну такую кнопку на
          странице.
        </StyledText>
        <ButtonContainer>
          <Button appearance="secondary">Secondary button</Button>
        </ButtonContainer>
        <StyledText>
          Второстепенная кнопка. Используется для дополнительных действий. Часто идет в паре с основной кнопкой, когда
          нужно обозначить несколько действий, одно из которых является основным.
        </StyledText>
        <ButtonContainer>
          <Button appearance="tertiary">Tertiary button</Button>
        </ButtonContainer>
        <StyledText>
          Третичная кнопка. Используется для дополнительных действий. Имеет меньший визуальный акцент нежели вторичная
          кнопка.
        </StyledText>
        <ButtonContainer>
          <Button appearance="ghost">Ghost button</Button>
        </ButtonContainer>
        <StyledText>
          Прозрачная кнопка. Кнопка имеет наименьший приоритет по сравнению с Primary и Secondary кнопками.
        </StyledText>
        <ButtonContainer>
          <Button appearance="danger">Danger button</Button>
        </ButtonContainer>
        <StyledText>
          Кнопка для обозначения критичных действий, которые ведут к необратимым последствиям. Например, удаление
          информации без возможности восстановления.
        </StyledText>
        <ButtonContainer>
          <Button appearance="success">Success button</Button>
        </ButtonContainer>
        <StyledText>Кнопка для обозначения позитивных действий.</StyledText>
        <ButtonContainer $appearance="white">
          <Button appearance="white">White button</Button>
        </ButtonContainer>
        <StyledText>Белая кнопка для использования на темных поверхностях в светлой теме</StyledText>
      </GridContainer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/button/types')({
  component: () => <ButtonBasic />,
  staticData: {
    title: 'Button. Типы',
    description: '',
  },
});
