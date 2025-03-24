import styled from 'styled-components';
import { Avatar, AvatarActivity } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Description = () => {
  return (
    <>
      Условно компонент можно разделить на два вида – обычный Avatar и тот, который используется с Activity Ring. Во
      втором варианте появляется пустое пространство вокруг компонента под круг фокусировки, что бы он (круг) при
      включении входил в общий размер компонента и не обрезался во фреймах. Таким образом, включение опции «Activity
      Avatar» добавляет по 4 px с каждой стороны компонента. Используйте только один тип Аватаров одновременно.
      <Separator height={8} />
      Компонент может быть кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями
      пользователя.
      <Separator height={8} />
      При ховере над аватаром показывается Tooltip с именем пользователя (опционально можно отключить).
      <Separator height={8} />
      Аватары можно группировать – компонент Avatar Group, в таком случае статусы показывать нельзя.
      <Separator height={8} />
      Рекомендуемый алгоритм использования типов аватаров:
      <li>Если пользователь предоставил фотографию, то используется аватар с фото</li>
      <li>Если нет фото, то пишутся инициалы пользователя – первые буквы имени и фамилии</li>
      <li>Если известно только имя, то пишутся первые две буквы имени</li>
      <li>Если нет никаких данных, то используется аватар с иконкой.</li>
    </>
  );
};

export const AvatarBasic = () => {
  return (
    <ExampleSection text={<Description />}>
      <HorizontalContainer>
        <Avatar showTooltip userName="Avatar" />
        <AvatarActivity showTooltip showActivityRing userName="AvatarActivity" />
      </HorizontalContainer>
    </ExampleSection>
  );
};
