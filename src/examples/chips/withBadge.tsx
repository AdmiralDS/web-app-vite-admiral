import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Chips } from '@admiral-ds/react-ui';

import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';

const listData = (genID: () => string) =>
  [
    {
      id: genID(),
      children: 'Москва',
      badge: 1,
    },
    { id: genID(), children: 'Тверь', badge: 2 },
    { id: genID(), children: 'Самара', badge: 3 },
    { id: genID(), children: 'Омск', disabled: true, badge: 4 },
    { id: genID(), children: 'Вильнус', badge: 5 },
  ] satisfies React.ComponentProps<typeof Chips>[];

function getIdList(list: { id: string }[]): string[] {
  return list.map((elm) => elm.id);
}

function getElementMapById<T extends { id: string }>(list: T[]): Record<string, T> {
  return list.reduce((acc, elem) => ({ ...acc, [elem.id]: elem }), {});
}

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

export const ChipsBadges = () => {
  const [listM, elemMbyId] = useMemo(() => {
    const list = listData(uuidv4);
    return [getIdList(list), getElementMapById(list)];
  }, []);

  const [idListS, elemSbyId] = useMemo(() => {
    const list = listData(uuidv4);
    return [getIdList(list), getElementMapById(list)];
  }, []);

  const [idListM, setListM] = useState(listM);
  const [selectedChips, setSelected] = useState<Record<string, boolean>>({});

  const handleChipClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const id = e.currentTarget.id;
    setSelected((selected) => ({ ...selected, [id]: !selected[id] }));
  };

  const handleChipClose = (closeId: string) => {
    setListM((list) => list.filter((id) => id !== closeId));
  };
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <WrapperChip $dimension="m">
        {idListM
          .map((id) => elemMbyId[id])
          .map((item) => (
            <Chips
              {...item}
              key={item.id}
              selected={selectedChips[item.id]}
              dimension="m"
              onClose={() => handleChipClose(item.id)}
            />
          ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {idListS
          .map((id) => elemSbyId[id])
          .map((item) => (
            <Chips
              {...item}
              key={item.id}
              dimension="s"
              selected={selectedChips[item.id]}
              onClick={handleChipClick}
              appearance="filled"
            />
          ))}
      </WrapperChip>
    </ExampleSection>
  );
};
