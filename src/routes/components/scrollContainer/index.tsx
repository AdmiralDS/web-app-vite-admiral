import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { ScrollContainer, Toggle } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

const ScrollContainerStyled = styled(ScrollContainer)`
  & > div {
    padding-left: 12px;
  }
`;

export const Template = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ExampleSection>
      <Wrapper>
        <ScrollContainerStyled>
          <PStyled>ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.</PStyled>
          <PStyled>Скролбары появляется автоматически при переполнении.</PStyled>
          <PStyled>
            Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация скролбаров
            происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и не трогать
            поведение нативного скрола.
          </PStyled>
          <PStyled>
            Использование requestAnimationFrame не нагружает браузер, так как в функции обратного вызова происходит
            только чтение состояния контейнера и только при появлении изменений управление передается на синхронизацию
            позиции скрола.
          </PStyled>
          <PStyled>
            Если необходимо расположить скролы вне контейнера, то можно использовать компонент Scrollbars,
            предварительно отключив нативные скролы на контейнере с помощью миксина hideNativeScrollbarsCss и передав
            его нод в параметр contentNode
          </PStyled>
          {checked && <div style={{ width: 700, height: 500 }}></div>}
          <Toggle checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}>
            еще больше переполнить контейнер
          </Toggle>
        </ScrollContainerStyled>
      </Wrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/scrollContainer/')({
  component: () => <Template />,
  staticData: {
    title: 'ScrollContainer. Базовый пример',
  },
});
