import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button, DropMenu, MenuItemWithCheckbox } from '@admiral-ds/react-ui';
import type { ItemWithCheckbox, RenderOptionProps } from '@admiral-ds/react-ui';
import { useMemo, useState } from 'react';

const STORY_ITEMS: Array<ItemWithCheckbox> = [
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

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  font-size: 16px;
  line-height: 24px;
`;

const handleVisibilityChangeControlledState = (isVisible: boolean) => {
  // eslint-disable-next-line no-console
  console.log('onVisibilityChange with controlled state');
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

export const DropMenuCheckbox = () => {
  const [innerState, setInnerState] = useState<Array<ItemWithCheckbox>>(STORY_ITEMS.map((item) => item));
  const [activeOption, setActiveOption] = useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const model = useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={!!item.checked} {...options}>
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption]);

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
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

  const handleButtonClick = () => {
    handleVisibilityChange(!isVisible);
  };

  const handleClickOutside = () => {
    // eslint-disable-next-line no-console
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <WrapperVertical>
      <Desc>
        Состояние видимости меню полностью контроллируется вне DropMenu:
        <br />
        - используется кастомный обработчик клика по кнопке (handleButtonClick) для открытия/закрытия выпадающего
        списка;
        <br />- после выбора опции из выпадающего списка (handleSelectItem) происходит закрытие меню;
        <br />- используется кастомный обработчик при клике вне области выпадающего списка (handleClickOutside).
      </Desc>
      <DropMenu
        items={model}
        active={activeOption}
        onActivateItem={handleActivateItem}
        selected={selectedOption}
        onSelectItem={handleSelectItem}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        onClickOutside={handleClickOutside}
        disableSelectedOptionHighlight={true}
        renderContentProp={({ buttonRef, handleKeyDown, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleButtonClick}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
  );
};

export const Route = createFileRoute('/components/dropMenu/withCheckbox')({
  component: () => <DropMenuCheckbox />,
  staticData: {
    title: 'DropMenu. Пример с Checkbox',
    description: 'Пример меню с пунктами, содержащими Checkbox.',
  },
});
