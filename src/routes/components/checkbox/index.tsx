import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const CheckboxBasic = () => {
  return (
    <ExampleSection>
      <Container>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdOne">
          Text 1
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdTwo">
          Text 2
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">
          Text 3
        </CheckboxField>
      </Container>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/checkbox/')({
  component: () => <CheckboxBasic />,
  staticData: {
    title: 'CheckboxField. Базовый пример.',
    description:
      'Чекбоксы применяются, когда есть список опций для выбора. Можно выбрать любое количество опций из списка. Выбор одних пунктов никак не влияет на другие.',
  },
});
