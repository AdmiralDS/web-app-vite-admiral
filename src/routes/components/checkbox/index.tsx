import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { CheckboxField } from '@admiral-ds/react-ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

export const CheckboxBasic = () => {
  return (
    <Wrapper>
      <Container>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdOne">
          Неуправляемый чекбокс
        </CheckboxField>
      </Container>
    </Wrapper>
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
