import { ExampleSection, PStyled } from '#examples/-helpers';
import { ScrollContainer, Toggle, typography } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const ScrollContainerStyled = styled(ScrollContainer)`
  padding: 0 20px 20px 0;
`;

const PWithFont = styled(PStyled)`
  ${typography['Body/Body 2 Long']}
`;

const ToggleStyled = styled(Toggle)`
  margin-top: 15px;
`;

const Box = styled.div`
  width: 700px;
  height: 200px;
`;

export const ScrollContainerBasic = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ExampleSection>
      <Wrapper>
        <ScrollContainerStyled>
          <PWithFont>ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.</PWithFont>
          <PWithFont>Скролбары появляется автоматически при переполнении.</PWithFont>
          <PWithFont>
            Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация скролбаров
            происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и не трогать
            поведение нативного скрола.
          </PWithFont>
          <PWithFont>
            Использование requestAnimationFrame не нагружает браузер, так как в функции обратного вызова происходит
            только чтение состояния контейнера и только при появлении изменений управление передается на синхронизацию
            позиции скрола.
          </PWithFont>
          <PWithFont>
            Если необходимо расположить скролы вне контейнера, то можно использовать компонент Scrollbars,
            предварительно отключив нативные скролы на контейнере с помощью миксина hideNativeScrollbarsCss и передав
            его нод в параметр contentNode
          </PWithFont>
          {checked && <Box />}
        </ScrollContainerStyled>
        <ToggleStyled checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}>
          еще больше переполнить контейнер
        </ToggleStyled>
      </Wrapper>
    </ExampleSection>
  );
};
