import styled from 'styled-components';
import { useMemo } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import { Menu, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuWrapper } from '#routes/-helpers/menu';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const MultiLineMenuItem = styled(MenuItem)`
  white-space: pre-wrap;
`;

export const MenuMultiLine = () => {
  const model = useMemo(() => {
    return items.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MultiLineMenuItem dimension="l" {...options} key={item.id}>
            {item.label}
          </MultiLineMenuItem>
        ),
      };
    });
  }, []);

  return (
    <ExampleSection>
      <MenuWrapper style={{ maxWidth: '200px' }}>
        <Menu defaultIsActive={false} model={model} />
      </MenuWrapper>
    </ExampleSection>
  );
};
