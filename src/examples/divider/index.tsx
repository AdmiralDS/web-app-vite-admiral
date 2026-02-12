import { Divider, ListItem, UnorderedList } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled } from '#examples/-helpers';

const Settings = () => {
  return (
    <UnorderedList dimension="s">
      <ListItem>Тип — горизонтальный или вертикальный</ListItem>
      <ListItem>Стиль — default, subtle, strong, primary, static white</ListItem>
      <ListItem>Толщина линии — 1 px, 2 px</ListItem>
      <ListItem>Тема — светлая или темная</ListItem>
      <ListItem>Вы можете назначать произвольные цвета компоненту, помимо заданных</ListItem>
      <ListItem>Размер компонента регулируется «вручную» пользователем</ListItem>
    </UnorderedList>
  );
};

const Recommendations = () => {
  return (
    <>
      <PStyled>
        <UnorderedList dimension="s">
          <ListItem>
            Используйте Divider, только когда это необходимо. В большинстве ситуаций можно обойтись пустым пространством
            (отступами) и цветами.
          </ListItem>
          <ListItem>Не используйте компонент для создания обводок и других аналогичных элементов.</ListItem>
          <ListItem>
            При использовании между несколькими одинаковыми элементами интерфейса, разделители ставятся только между
            ними. Не ставьте разделители перед первым элементом и после последнего.
          </ListItem>
        </UnorderedList>
      </PStyled>
      <PStyled>Ширина компонента задается пользователем. Высота формируется контентом.</PStyled>
      <PStyled>Компонент не используется на мобильных устройствах</PStyled>
    </>
  );
};

export const DividerBasic = () => {
  return (
    <>
      <ExampleSection header="Настройки компонента" text={<Settings />} />
      <ExampleSection header="Рекомендации" text={<Recommendations />}>
        <Divider />
      </ExampleSection>
    </>
  );
};
