import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import {
  CheckboxGroupItemProps,
  checkboxTreeToMap,
  Menu,
  MenuItemWithCheckbox,
  MenuModelItemProps,
  type RenderOptionProps,
} from '@admiral-ds/react-ui';
import { MenuWrapper } from '#routes/-helpers/menu';

const items: Array<CheckboxGroupItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

const MenuWithCheckboxGroup = () => {
  const dimension: 'l' | 'm' | 's' = 'l';

  const [internalModel, setInternalModel] = useState<Array<CheckboxGroupItemProps>>([...items]);
  const [activeOption, setActiveOption] = useState<string | undefined>();

  const map = useMemo(() => {
    return checkboxTreeToMap(internalModel);
  }, [internalModel]);

  const setChecked = (id: string, value: boolean) => {
    const mapItem = map.get(id);
    if (mapItem?.node.disabled) return;
    if (mapItem) {
      mapItem.node.checked = value;
    }

    if (mapItem?.dependencies?.length) {
      mapItem?.dependencies?.forEach((depId: string) => setChecked(depId, value));
    }
  };

  const toggleCheck = (id: string) => {
    const item = map.get(id);
    const hasChildren = !!item?.node.children;

    const indeterminate =
      item?.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
      item?.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);

    const checked = hasChildren
      ? indeterminate
        ? true
        : item?.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
      : item?.node.checked;

    setChecked(id, !checked);

    setInternalModel([...internalModel]);
  };

  const model = useMemo(() => {
    const menuModel: MenuModelItemProps[] = [];
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : !!node.checked;
      menuModel.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <MenuItemWithCheckbox
            key={node.id}
            id={node.id}
            dimension={dimension}
            disabled={node.disabled}
            checked={checked}
            indeterminate={indeterminate}
            level={item.level}
            {...options}
          >
            {node.label}
          </MenuItemWithCheckbox>
        ),
        disabled: node.disabled,
      });
    });

    return menuModel;
  }, [map, activeOption]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} selected`);
    toggleCheck(id);
  };

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  return (
    <ExampleSection
      text={
        <>
          Можно выводить дерево чекбоксов в меню. Каждый следующий уровень добавляет к дефолтному отступу:
          <li>+32px для размеров L,M</li>
          <li>+28px для размера S</li>
          Поведение соответствует тому же, что описано в документации на составную группу чекбоксов в разделе Checkbox.
          Не рекомендуется делать больше двух уровней вложенности.
        </>
      }
    >
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          onSelectItem={handleSelectItem}
          active={activeOption}
          onActivateItem={handleActivateItem}
          disableSelectedOptionHighlight={true}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dropdown/menuWithCheckboxGroup')({
  component: () => <MenuWithCheckboxGroup />,
  staticData: {
    title: 'Menu. С CheckboxGroup',
    description: '',
  },
});
