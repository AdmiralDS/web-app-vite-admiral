import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const RadioButtonExtraText = () => {
  return (
    <ExampleSection>
      <Container>
        <RadioButton value={1} extraText="Additional text">
          Text
        </RadioButton>
        <RadioButton value={1} dimension="s" extraText="Additional text">
          Text
        </RadioButton>
      </Container>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/radiobutton/extraText')({
  component: () => <RadioButtonExtraText />,
  staticData: {
    title: 'RadioButton. Дополнительный текст',
    description: 'Состояния аналогичны стандартным радио кнопкам',
  },
});
