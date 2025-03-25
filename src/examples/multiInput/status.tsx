import { ExampleSection, uid } from '#examples/-helpers';

import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Chips, typography, MultiInput } from '@admiral-ds/react-ui';

const disabledChipStyle = css`
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

const hoverChipStyle = css`
  &:hover {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }
`;

export const StyledChip = styled(Chips)<{ readOnly?: boolean }>`
  display: flex;
  min-width: 35px;
  max-width: 190px;

  @media (max-width: 768px) {
    max-width: 80px;
  }

  ${({ disabled, readOnly }) => (disabled ? disabledChipStyle : readOnly ? null : hoverChipStyle)}

  ${typography['Caption/Caption 1']};
`;

export const MultiInputStatusExample = () => {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [listValueOne, setListValueOne] = useState<React.ComponentProps<typeof StyledChip>[]>([]);
  const [listValueTwo, setListValueTwo] = useState<React.ComponentProps<typeof StyledChip>[]>([]);

  const handleDeleteChipOne = (id?: string) => {
    setListValueOne((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleDeleteChipTwo = (id?: string) => {
    setListValueTwo((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleKeyDownOne = () => {
    const newValue = valueOne.trim();

    if (newValue) {
      setListValueOne((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueOne('');
    }
  };

  const handleKeyDownTwo = () => {
    const newValue = valueTwo.trim();

    if (newValue) {
      setListValueTwo((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueTwo('');
    }
  };

  return (
    <>
      <ExampleSection text="Статаус success">
        <MultiInput
          value={valueOne}
          status="success"
          onInputComplete={handleKeyDownOne}
          onClearOptions={() => setListValueOne([])}
          onChange={(e) => setValueOne(e.currentTarget.value)}
          displayClearIcon={listValueOne.length !== 0}
        >
          {listValueOne.map((item, index) => (
            <StyledChip
              {...item}
              disabled
              key={index}
              onClose={handleDeleteChipOne}
              tabIndex={-1}
              dimension="s"
              appearance="filled"
            />
          ))}
        </MultiInput>
      </ExampleSection>
      <ExampleSection text="Статус error">
        <MultiInput
          status="error"
          value={valueTwo}
          onInputComplete={handleKeyDownTwo}
          onClearOptions={() => setListValueTwo([])}
          onChange={(e) => setValueTwo(e.currentTarget.value)}
          displayClearIcon={listValueTwo.length !== 0}
        >
          {listValueTwo.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChipTwo}
              tabIndex={-1}
              dimension="s"
              appearance="filled"
            />
          ))}
        </MultiInput>
      </ExampleSection>
    </>
  );
};
