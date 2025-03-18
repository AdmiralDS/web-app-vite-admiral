import * as React from 'react';
import type { IOnCloseProps } from '@admiral-ds/react-ui';
import { Option, Select, T } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';
import type { SelectProps } from '@admiral-ds/react-ui';

import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const MultiSelectOnChange = ({
  placeholder = 'Города',
  optionList = OPTIONS_CITIES,
  ...props
}: SelectProps & { optionList?: string[] }) => {
  const [activeSegments, setActiveSegments] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setActiveSegments(selectedValues);
  };

  const handleSelectedChange = (value: string | Array<string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const handleClear = () => {
    setActiveSegments([]);
  };

  const handleChipOnClose = (props: IOnCloseProps) => {
    const selectedValues = activeSegments.filter((segment) => segment !== props.value);
    setActiveSegments(selectedValues);
  };

  const segmentsOptions = optionList.map((segmentName) => (
    <Option
      key={segmentName}
      value={segmentName}
      disabled={segmentName === 'Ижевск'}
      renderChip={() => ({
        children: segmentName,
        onClose: handleChipOnClose,
        key: `${segmentName}-chip`,
        disabled: segmentName === 'Ижевск',
      })}
    >
      {segmentName}
    </Option>
  ));

  return (
    <>
      <T font="Body/Body 2 Long" as="div">
        Так как компонент построен на нативном select, при использовании нативного события onchange в режиме multiple
        необходимо помнить, что в качестве <code>event.target.value</code> возвращается значение первой выбранной option
        из массива выбранных опций. Поэтому для обработки этого события используйте <code>event.selectedOptions</code>{' '}
        или свойство <code>option.selected</code>.
        <Separator $height={8} />
        Кроме того, рекомендуем использовать ненативное событие <code>onSelectedChange</code>, которое для режима
        multiple возвращает выбранные опции в порядке их выбора пользователем.
        <Separator $height={8} />
        Также следует помнить, что при использовании <code>renderChip</code> в Option нужно прокидывать все пропсы,
        включая disabled и readOnly при наличии, для корректного отображения чипсов.
      </T>
      <ExampleSection>
        <Select
          dimension="m"
          multiple
          placeholder={placeholder}
          value={activeSegments}
          onChange={handleChange}
          onSelectedChange={handleSelectedChange}
          onClearIconClick={handleClear}
          displayClearIcon
          style={{ minWidth: '300px' }}
          {...props}
        >
          {segmentsOptions}
        </Select>
      </ExampleSection>
    </>
  );
};
