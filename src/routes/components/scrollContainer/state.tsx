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
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <ExampleSection text="minThumbSize={10}">
        <Wrapper>
          <ScrollContainerStyled minThumbSize={10}>
            <PStyled>ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.</PStyled>
            <PStyled>Скролбары появляется автоматически при переполнении.</PStyled>
            <PStyled>
              Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация
              скролбаров происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и
              не трогать поведение нативного скрола.
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
            {checked2 && <div style={{ width: 700, height: 1500 }}></div>}
            <Toggle
              checked={checked2}
              onChange={(event) => {
                setChecked2(event.currentTarget.checked);
                console.log(event.currentTarget.checked);
              }}
            >
              еще больше переполнить контейнер
            </Toggle>
          </ScrollContainerStyled>
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="minThumbSize={1000}">
        <Wrapper>
          <ScrollContainerStyled minThumbSize={1000}>
            <PStyled>ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.</PStyled>
            <PStyled>Скролбары появляется автоматически при переполнении.</PStyled>
            <PStyled>
              Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация
              скролбаров происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и
              не трогать поведение нативного скрола.
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
            {checked && <div style={{ width: 700, height: 1500 }}></div>}
            <Toggle checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}>
              еще больше переполнить контейнер
            </Toggle>
          </ScrollContainerStyled>
        </Wrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/scrollContainer/state')({
  component: () => <Template />,
  staticData: {
    title: 'ScrollContainer. Состояния',
  },
});
