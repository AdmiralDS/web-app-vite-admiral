import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { skeletonAnimationMixin } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Skeleton = styled.div`
  width: 100%;
  height: 50px;
  ${skeletonAnimationMixin};
`;

export const Template = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Используются, когда требуется длительное время для загрузки содержимого страницы. Использование скелетона
              и его анимация дает пользователю понять, что все работает хорошо, просто требуется какое то время для
              загрузки контента.
            </PStyled>
            <PStyled>
              Скелетоны представляют собой упрощенные (схематичные) версии компонентов, появляются при начале загрузки
              страницы и исчезают после ее полной загрузки.
            </PStyled>
            <PStyled>Некоторые компоненты имеют состояние skeleton</PStyled>
            <PStyled>
              Для того чтобы сделать Skeleton компонент необходимо добавить skeletonAnimationMixin в style
            </PStyled>
          </>
        }
      >
        <Skeleton />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/skeleton/')({
  component: () => <Template />,
  staticData: {
    title: 'Skeleton. Базовый пример',
  },
});
