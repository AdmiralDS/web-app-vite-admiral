import { createFileRoute } from '@tanstack/react-router';
import { css } from 'styled-components';
import { useMemo } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Menu, MenuActionsPanel, MenuItem, type RenderOptionProps } from '@admiral-ds/react-ui';
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
    label: 'Option three',
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

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;

const MenuActionTwoButtons = () => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <ExampleSection>
      <MenuWrapper style={{ maxWidth: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          renderBottomPanel={({ dimension, menuActionsPanelCssMixin = ActionPanelFlex }) => {
            return (
              <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={menuActionsPanelCssMixin}>
                <Button
                  dimension={'s'}
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={'s'}
                  appearance="secondary"
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 2 clicked');
                  }}
                >
                  Action 2
                </Button>
              </MenuActionsPanel>
            );
          }}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuActionTwoButtons')({
  component: () => <MenuActionTwoButtons />,
  staticData: {
    title: 'Menu. Пример с Actions с двумя кнопками',
    description: '',
  },
});
