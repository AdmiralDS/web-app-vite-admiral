import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const CheckboxBasic = () => {
  return (
    <ExampleWrapper>
      <Container>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdOne">
          Неуправляемый чекбокс
        </CheckboxField>
      </Container>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/checkbox/')({
  component: () => <CheckboxBasic />,
  staticData: {
    title: 'CheckboxField. Базовый пример.',
    description:
      'Чекбоксы применяются, когда есть список опций для выбора.  Можно выбрать любое количество опций из списка. Выбор одних пунктов никак не влияет на другие.',
  },
});
