import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const listData = [
  { id: '1', label: 'Москва', disabled: false, selected: false },
  { id: '2', label: 'Тверь', disabled: false, selected: false },
  { id: '3', label: 'Самара', disabled: false, selected: false },
];

export const ChipsSizes = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <WrapperChip $dimension="m">
          {listData.map((item) => (
            <Chips dimension="m" appearance="outlined" key={item.id}>
              {item.label}
            </Chips>
          ))}
        </WrapperChip>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <WrapperChip $dimension="s">
          {listData.map((item) => (
            <Chips dimension="s" appearance="outlined" key={item.id}>
              {item.label}
            </Chips>
          ))}
        </WrapperChip>
      </ExampleSection>
    </>
  );
};
