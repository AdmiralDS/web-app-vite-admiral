import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import type { RenderOptionProps } from '@admiral-ds/react-ui';
import { Button, DropMenu, MenuItem, TooltipHoc } from '@admiral-ds/react-ui';
import { useMemo, useState } from 'react';
import { ExampleWrapper } from '../../-helpers/examples';

const STORY_ITEMS = [
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

const MenuItemWithTooltip = TooltipHoc(MenuItem);

export const DropMenuTooltip = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const model = useMemo(() => {
    return STORY_ITEMS.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip renderContent={() => item.label} {...options} key={item.id}>
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem {...options} key={item.id}>
              {item.label}
            </MenuItem>
          ),
      };
    });
  }, []);

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
  };

  const handleButtonClick = () => {
    handleVisibilityChange(!isVisible);
  };

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} clicked`);
    setSelected(id);
    handleVisibilityChange(false);
  };

  const handleClickOutside = () => {
    // eslint-disable-next-line no-console
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <ExampleWrapper>
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
          isVisible={isVisible}
          onVisibilityChange={handleVisibilityChange}
          onSelectItem={handleSelectItem}
          onClickOutside={handleClickOutside}
          selected={selected}
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
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/dropMenu/tooltip')({
  component: () => <DropMenuTooltip />,
  staticData: {
    title: 'DropMenu. Пример с Tooltip',
    description: 'Для того чтобы добавить tooltip к пункту меню, его необходимо обернуть TooltipHoc.',
  },
});
