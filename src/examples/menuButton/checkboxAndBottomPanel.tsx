import { useMemo, useState } from 'react';
import { css } from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import {
  Button,
  ItemWithCheckbox,
  MenuActionsPanel,
  MenuButton,
  MenuItemWithCheckbox,
  RenderOptionProps,
  RenderPanelProps,
} from '@admiral-ds/react-ui';

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;

const itemsWithCheckbox: Array<ItemWithCheckbox> = [
  {
    id: '1',
    label: 'Option one',
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

export const CheckboxAndBottomPanel = () => {
  const [innerState, setInnerState] = useState<Array<ItemWithCheckbox>>(itemsWithCheckbox.map((item) => item));
  const [activeOption, setActiveOption] = useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const model = useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={!!item.checked} {...options} dimension="s">
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption]);

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} clicked`);
    const updatedInnerState = [...innerState];
    const itemToUpdate = updatedInnerState.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
    }
    setInnerState(updatedInnerState);
    setSelectedOption(undefined);
  };

  const handleMenuVisibilityChange = (visible: boolean) => {
    // eslint-disable-next-line no-console
    console.log('user menu visibilty change');
    setMenuVisible(visible);
  };

  return (
    <ExampleSection>
      <MenuButton
        dimension="s"
        appearance="ghost"
        items={model}
        active={activeOption}
        onActivateItem={handleActivateItem}
        selected={selectedOption}
        onSelectItem={handleSelectItem}
        disableSelectedOptionHighlight={true}
        isVisible={menuVisible}
        onVisibilityChange={handleMenuVisibilityChange}
        renderBottomPanel={({ dimension }: RenderPanelProps) => (
          <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={ActionPanelFlex}>
            <Button dimension="s" onClick={() => handleMenuVisibilityChange(false)}>
              Action 1
            </Button>
            <Button dimension="s" appearance="secondary" onClick={() => handleMenuVisibilityChange(false)}>
              Action 2
            </Button>
          </MenuActionsPanel>
        )}
      >
        Выберите опцию
      </MenuButton>
    </ExampleSection>
  );
};
