import type { RenderOptionProps } from '@admiral-ds/react-ui';
import { ActionBar, ActionBarItemWithTooltip, ActionBarDropMenuItem } from '@admiral-ds/react-ui';

// Импорт оптимизированной иконки через настроенный SVGR лоадер (https://react-svgr.com/docs/what-is-svgr/)
import SearchOutline from '@admiral-ds/icons/build/system/SearchOutline.svg?react';
import EditOutline from '@admiral-ds/icons/build/system/EditOutline.svg?react';
import ArchiveOutline from '@admiral-ds/icons/build/service/ArchiveOutline.svg?react';
import HeartOutline from '@admiral-ds/icons/build/category/HeartOutline.svg?react';
import PinOutline from '@admiral-ds/icons/build/category/PinOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import LinkOutline from '@admiral-ds/icons/build/system/LinkOutline.svg?react';
import ExportOutline from '@admiral-ds/icons/build/system/ExportOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

import { ExampleSection } from '#examples/-helpers';

const items = [
  {
    itemId: '1',
    withDivider: false,
    name: 'Search',
    icon: <SearchOutline />,
    disabled: false,
  },
  {
    itemId: '2',
    withDivider: false,
    name: 'Edit',
    icon: <EditOutline />,
    disabled: false,
  },
  {
    itemId: '3',
    withDivider: true,
    name: 'Archive',
    icon: <ArchiveOutline />,
    disabled: false,
  },
  {
    itemId: '4',
    withDivider: false,
    name: 'Heart',
    icon: <HeartOutline />,
    disabled: false,
  },
  {
    itemId: '5',
    withDivider: false,
    name: 'Pin',
    icon: <PinOutline />,
    disabled: false,
  },
  {
    itemId: '6',
    withDivider: true,
    name: 'Email',
    icon: <EmailOutline />,
    disabled: true,
  },
  {
    itemId: '7',
    withDivider: false,
    name: 'Attach file',
    icon: <AttachFileOutline />,
    disabled: false,
  },
  {
    itemId: '8',
    withDivider: false,
    name: 'Attach link',
    icon: <LinkOutline />,
    disabled: false,
  },
  {
    itemId: '9',
    withDivider: false,
    name: 'Export',
    icon: <ExportOutline />,
    disabled: false,
  },
  {
    itemId: '10',
    withDivider: false,
    name: 'Delete',
    icon: <DeleteOutline />,
    disabled: false,
  },
];

export const ActionBarBasic = () => {
  const itemsMap = items.map((item) => ({
    itemId: item.itemId,
    withDivider: item.withDivider,
  }));
  const dimension = 'l';

  const renderActionBarItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(`${item.name} clicked`);
    return (
      <ActionBarItemWithTooltip
        dimension={dimension}
        id={item.itemId}
        key={item.itemId}
        renderContent={() => item.name}
        onClick={handleClick}
        disabled={item.disabled}
      >
        {item.icon}
      </ActionBarItemWithTooltip>
    );
  };
  const renderDropMenuItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(`${item.name} clicked`);
    return (options: RenderOptionProps) => {
      return (
        <ActionBarDropMenuItem dimension={dimension} {...options} key={itemId} onClick={handleClick}>
          {item.icon}
          {item.name}
        </ActionBarDropMenuItem>
      );
    };
  };
  const itemIsDisabled = (itemId: string) => {
    const currentTab = items.find((item) => item.itemId === itemId);
    return !!currentTab?.disabled;
  };

  return (
    <ExampleSection
      text="Над каждой кнопкой, входящей в состав
          компонента, при ховере, появляется Tooltip с подсказкой функции кнопки. По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева,
          сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл кнопки
          очевиден, опционально можно отключать тултип."
    >
      <ActionBar
        items={itemsMap}
        renderActionBarItem={renderActionBarItem}
        renderDropMenuItem={renderDropMenuItem}
        itemIsDisabled={itemIsDisabled}
        dimension={dimension}
        style={{ width: '80%' }}
      />
    </ExampleSection>
  );
};
