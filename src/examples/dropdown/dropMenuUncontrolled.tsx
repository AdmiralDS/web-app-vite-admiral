import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';

import { Button, DropMenu, MenuItem, RadioButton } from '@admiral-ds/react-ui';
import type { RenderOptionProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

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
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five with very very long text',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];

const handleVisibilityChangeUnControlledState = (isVisible: boolean) => {
  // eslint-disable-next-line no-console
  console.log('onVisibilityChange with uncontrolled state');
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

export const DropMenuUncontrolled = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [checkedState, setCheckedState] = useState(STORY_ITEMS.map((item) => ({ id: item.id, checked: false })));

  const model = useMemo(() => {
    return STORY_ITEMS.map((item, index) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem {...options} key={item.id}>
          <RadioButton
            disabled={item.disabled}
            key={item.id}
            checked={checkedState[index].checked}
            onChange={() => false}
          >
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [checkedState]);

  return (
    <ExampleSection
      text={
        <>
          Неконтроллируемое состояние видимости меню:
          <li>isVisible не передается в DropMenu;</li>
          <li>обработчик onVisibilityChange выполняется из DropMenu;</li>
          <li>для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu.</li>
          По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
          закрывает выпадающий список при выборе опции.
        </>
      }
    >
      <DropMenu
        items={model}
        onSelectItem={(id) => {
          // eslint-disable-next-line no-console
          console.log(`selected: ${id}`);
          const newCheckedState = checkedState.map((item) => ({
            ...item,
            checked: item.id === id || item.id === selected ? !item.checked : item.checked,
          }));
          setCheckedState(newCheckedState);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChangeUnControlledState}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/dropMenuUncontrolled')({
  component: () => <DropMenuUncontrolled />,
  staticData: {
    title: 'DropMenu. Неконтроллируемое состояние видимости',
    description: '',
  },
});
