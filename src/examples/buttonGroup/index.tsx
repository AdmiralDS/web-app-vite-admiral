import styled from 'styled-components';

import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Desc = () => {
  return (
    <>
      <li>
        Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они стоят
        рядом.
      </li>
      <Separator height={8} />
      <li>Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.</li>
      <Separator height={8} />
      <li>Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.</li>
      <Separator height={8} />
      <li>
        Каждый сегмент в группе кнопок состоит из компонента кнопки Button и может быть визуально представлен
        одинаковыми типами и состояниями кнопок.
      </li>
      <Separator height={8} />
      <li>
        Нельзя использовать в группе кнопки с разными включенными опциями. Если есть иконка, то она во всех кнопках.
      </li>
    </>
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
