import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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
    <ExampleSection text="Кнопки представлены в четырех размерностях XL, L, M и S. Такое количество кнопок обусловлено большим количеством проектов разной степени плотности — от простых интерфейсов низкой плотности до сложных высоконагруженных систем.">
      <ButtonContainer>
        <Button dimension="xl">Button 56</Button>
        <Button dimension="l">Button 48</Button>
        <Button dimension="m">Button 40</Button>
        <Button dimension="s">Button 32</Button>
      </ButtonContainer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/button/dimension')({
  component: () => <ButtonBasic />,
  staticData: {
    title: 'Button. Размеры',
    description: '',
  },
});
