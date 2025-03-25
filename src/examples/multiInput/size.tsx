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

export const MultiInputSizeExample = () => {
  const [valueSizeS, setValueSizeS] = useState('');
  const [valueSizeM, setValueSizeM] = useState('');
  const [valueSizeXL, setValueSizeXL] = useState('');
  const [listValueSizeS, setListValueSizeS] = useState<React.ComponentProps<typeof StyledChip>[]>([]);
  const [listValueSizeM, setListValueSizeM] = useState<React.ComponentProps<typeof StyledChip>[]>([]);
  const [listValueSizeXL, setListValueSizeXL] = useState<React.ComponentProps<typeof StyledChip>[]>([]);

  const handleDeleteChipSizeS = (id?: string) => {
    setListValueSizeS((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };
  const handleDeleteChipSizeM = (id?: string) => {
    setListValueSizeM((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };
  const handleDeleteChipSizeXL = (id?: string) => {
    setListValueSizeXL((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleKeyDownSizeS = () => {
    const newValue = valueSizeS.trim();

    if (newValue) {
      setListValueSizeS((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueSizeS('');
    }
  };
  const handleKeyDownSizeM = () => {
    const newValue = valueSizeM.trim();

    if (newValue) {
      setListValueSizeM((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueSizeM('');
    }
  };
  const handleKeyDownSizeXL = () => {
    const newValue = valueSizeXL.trim();

    if (newValue) {
      setListValueSizeXL((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValueSizeXL('');
    }
  };

  return (
    <>
      <ExampleSection text="Размер S">
        <MultiInput
          dimension="s"
          value={valueSizeS}
          onInputComplete={handleKeyDownSizeS}
          onClearOptions={() => setListValueSizeS([])}
          onChange={(e) => setValueSizeS(e.currentTarget.value)}
          displayClearIcon={listValueSizeS.length !== 0}
        >
          {listValueSizeS.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChipSizeS}
              tabIndex={-1}
              dimension="s"
              appearance="filled"
            />
          ))}
        </MultiInput>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <MultiInput
          dimension="m"
          value={valueSizeM}
          onInputComplete={handleKeyDownSizeM}
          onClearOptions={() => setListValueSizeM([])}
          onChange={(e) => setValueSizeM(e.currentTarget.value)}
          displayClearIcon={listValueSizeM.length !== 0}
        >
          {listValueSizeM.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChipSizeM}
              tabIndex={-1}
              dimension="s"
              appearance="filled"
            />
          ))}
        </MultiInput>
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <MultiInput
          dimension="xl"
          value={valueSizeXL}
          onInputComplete={handleKeyDownSizeXL}
          onClearOptions={() => setListValueSizeXL([])}
          onChange={(e) => setValueSizeXL(e.currentTarget.value)}
          displayClearIcon={listValueSizeXL.length !== 0}
        >
          {listValueSizeXL.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChipSizeXL}
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
