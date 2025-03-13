import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select, typography } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React from 'react';

import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;
const ExtraText = styled.div`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  ${typography['Body/Body 2 Short']}
`;

export const Template = ({ placeholder = 'Серийные номера', ...props }: SelectProps) => {
  const [multiSelectValue, setMultiSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const handleMultiSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setMultiSelectValue(value);
  };

  const renderMultiOptions = () => {
    return Array.from({ length: 20 }).map((_option, ind) => (
      <Option key={ind} value={`${ind}0000`} renderChip={() => `${ind}0000`}>
        <TextWrapper>
          {`${ind}0000`}
          <ExtraText>{`Доп ${ind}`}</ExtraText>
        </TextWrapper>
      </Option>
    ));
  };

  return (
    <ExampleSection
      text="При использовании кастомных опций, реализуемых через Option children, в режиме multiple, необходимо определить у
          Option свойство renderChip, так как содержимое Chip и Tooltip формируется в методе renderChip, в противном
          случае внутри Chip и Tooltip у компонента Chip будет отображаться тот же child, что указан в качестве дочернего
          для Option."
    >
      <Select
        {...props}
        id="props_id2"
        mode="searchSelect"
        value={multiSelectValue}
        placeholder={placeholder}
        multiple={true}
        onSelectedChange={handleMultiSelectedChange}
      >
        {renderMultiOptions()}
      </Select>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/select/multiCustomOptionsByRenderChip')({
  component: () => <Template />,
  staticData: {
    title: 'mode="multiple" с кастомными опциями через Option children',
  },
});
