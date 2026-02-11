import { Button, ButtonGroup, ListItem, UnorderedList } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const Desc = () => {
  return (
    <UnorderedList dimension="s">
      <ListItem>
        Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они стоят
        рядом.
      </ListItem>
      <ListItem>
        Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.
      </ListItem>
      <ListItem>
        Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.
      </ListItem>
      <ListItem>
        Каждый сегмент в группе кнопок состоит из компонента кнопки Button и может быть визуально представлен
        одинаковыми типами и состояниями кнопок.
      </ListItem>
      <ListItem>
        Нельзя использовать в группе кнопки с разными включенными опциями. Если есть иконка, то она во всех кнопках.
      </ListItem>
    </UnorderedList>
  );
};

export const ButtonGroupBasic = () => (
  <ExampleSection text={<Desc />}>
    <ButtonGroup>
      <Button dimension="l">Button 56</Button>
      <Button dimension="m">Button 56</Button>
      <Button dimension="s">Button 56</Button>
    </ButtonGroup>
  </ExampleSection>
);
