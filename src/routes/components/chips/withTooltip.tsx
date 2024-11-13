import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

const listDataIconTooltip = [
  { id: '1', label: 'Ограниченное пространство', disabled: false },
  { id: '2', label: 'Ограниченное пространство', disabled: false },
  { id: '3', label: 'Ограниченное пространство', disabled: false },
];

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const StyledChipsTooltip = styled(Chips)`
  width: 160px;
`;

export const ChipsTooltip = (props: ChipsProps) => {
  return (
    <ExampleWrapper>
      <WrapperChip>
        {listDataIconTooltip.map((item) => (
          <StyledChipsTooltip {...props} renderContentTooltip={() => item.label} key={item.id}>
            {item.label}
          </StyledChipsTooltip>
        ))}
      </WrapperChip>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/chips/withTooltip')({
  component: () => <ChipsTooltip />,
  staticData: {
    title: 'Chips с Tooltip',
    description:
      'По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой происходит уход в троеточие. Но можно изменять этот параметр, стилизуя компонент через styled components. В случае сокращения над компонентом при ховере появляется Тултип с расшифровкой.',
  },
});
