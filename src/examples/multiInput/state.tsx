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

const initListValue = [
  {
    id: uid(),
    children: 'chipsOne',
  },
  { id: uid(), children: 'chipsTwo' },
  { id: uid(), children: 'chipsThree' },
];

export const MultiInputStateExample = () => {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [valueThree, setValueThree] = useState('');
  const [listValueOne, setListValueOne] = useState<React.ComponentProps<typeof StyledChip>[]>(initListValue);
  const [listValueTwo, setListValueTwo] = useState<React.ComponentProps<typeof StyledChip>[]>(initListValue);
  const [listValueThree, setListValueThree] = useState<React.ComponentProps<typeof StyledChip>[]>(initListValue);

  const handleDeleteChipOne = (id?: string) => {
    setListValueOne((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleDeleteChipThree = (id?: string) => {
    setListValueThree((prevState) => {
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

  const handleKeyDownThree = () => {
    const newValue = valueThree.trim();

    if (newValue) {
      setListValueThree((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueThree('');
    }
  };

  return (
    <>
      <ExampleSection text="disabled">
        <MultiInput
          value={valueOne}
          disabled
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
      <ExampleSection text="readOnly">
        <MultiInput
          readOnly
          value={valueTwo}
          onInputComplete={handleKeyDownTwo}
          onClearOptions={() => setListValueTwo([])}
          onChange={(e) => setValueTwo(e.currentTarget.value)}
          displayClearIcon={listValueTwo.length !== 0}
        >
          {listValueTwo.map((item, index) => (
            <StyledChip {...item} key={index} readOnly tabIndex={-1} dimension="s" appearance="filled" />
          ))}
        </MultiInput>
      </ExampleSection>
      <ExampleSection text="disableCopying">
        <MultiInput
          disableCopying
          value={valueThree}
          onInputComplete={handleKeyDownThree}
          onClearOptions={() => setListValueThree([])}
          onChange={(e) => setValueThree(e.currentTarget.value)}
          displayClearIcon={listValueThree.length !== 0}
        >
          {listValueThree.map((item, index) => (
            <StyledChip {...item} key={index} tabIndex={-1} dimension="s" appearance="filled" />
          ))}
        </MultiInput>
      </ExampleSection>
      <ExampleSection text="skeleton">
        <MultiInput
          skeleton
          value={valueThree}
          onInputComplete={handleKeyDownThree}
          onClearOptions={() => setListValueThree([])}
          onChange={(e) => setValueThree(e.currentTarget.value)}
          displayClearIcon={listValueThree.length !== 0}
        >
          {listValueThree.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChipThree}
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
