import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React, { ChangeEvent } from 'react';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

export const SelectForceHideOverflowTooltip = ({
  placeholder = 'Города',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueExample, setSelectValueExample] = React.useState<string>('');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample(e.target.value);

  const renderOverflowingOptions = () => {
    return [
      ...options,
      'Гигантский текст, который настолько большой, что, когда он проходил мимо телевизора, ты пропустил 2 серии любимого сериала',
    ].map((option, ind) => (
      <Option key={ind} value={option} disabled={ind === 2}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Отображается Title, tooltip скрыт">
        <T font="Body/Body 2 Long" as="div">
          Для того чтобы скрыть tooltip, отображаемый при переполнении, необходимо установить свойство{' '}
          <code>forceHideOverflowTooltip</code> в значение <code>true</code>.<Separator $height={8} />
          Title отображается стандартными средствами браузера, поэтому не кастомизируется.
        </T>
        <Separator />
        <Select
          {...props}
          id="props_id"
          placeholder={placeholder}
          value={selectValueExample}
          onChange={onChange}
          dropContainerClassName="dropContainerClass"
          forceHideOverflowTooltip
        >
          {renderOverflowingOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};
