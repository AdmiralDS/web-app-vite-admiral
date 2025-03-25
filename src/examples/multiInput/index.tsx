import { ExampleSection, PStyled, uid } from '#examples/-helpers';

import { useState, type ChangeEvent } from 'react';
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

export const MultiInputExample = () => {
  const [value, setValue] = useState('');
  const [listValue, setListValue] = useState<React.ComponentProps<typeof StyledChip>[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;

    setValue(currentValue);
  };

  const handleDeleteChip = (id?: string) => {
    setListValue((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleKeyDown = () => {
    const newValue = value.trim();

    if (newValue) {
      setListValue((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValue('');
    }
  };

  const handleClearListValue = () => {
    setListValue([]);
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Поле ввода с возможностью ввода нескольких значений в виде набора опций.
              <PStyled>
                По дефолту нажатие клавиши «Enter» создает опцию с введенным текстом. Опционально можно назначить любую
                клавишу из event.code. Подтвердить введенное значение можно только этими клавишами. Клик вне поля ввода
                или «Tab» не сохраняют введенные символы.
              </PStyled>
              <PStyled>Высота поля ввода всегда динамическая.</PStyled>
              <PStyled>
                Иконка «Крестик» полностью очищает поле. Клавиша «Backspace», удаляет введенные чипсы по одному, когда
                текстовое поле пустое.
              </PStyled>
            </PStyled>
          </>
        }
      >
        <MultiInput
          value={value}
          onInputComplete={handleKeyDown}
          onClearOptions={handleClearListValue}
          onChange={handleChange}
          displayClearIcon={listValue.length !== 0}
        >
          {listValue.map((item, index) => (
            <StyledChip
              {...item}
              key={index}
              onClose={handleDeleteChip}
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
