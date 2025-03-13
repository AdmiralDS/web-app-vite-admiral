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

import { ExampleSection } from '#routes/-helpers/examples';

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
    disabled: false,
  },
  {
    itemId: '7',
    withDivider: false,
    name: 'Attach file',
    icon: <AttachFileOutline />,
    disabled: false,
  },
];
type Dimension = 'xl' | 'l' | 'm' | 's';
const renderActionBarItemHOC = (dimension: Dimension) => {
  return (itemId: string) => {
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
};
const renderDropMenuItemHOC = (dimension: Dimension) => {
  return (itemId: string) => {
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
};

export const ActionBarDimension = () => {
  const itemsMap = items.map((item) => ({
    itemId: item.itemId,
    withDivider: item.withDivider,
  }));

  const itemIsDisabled = (itemId: string) => {
    const currentTab = items.find((item) => item.itemId === itemId);
    return !!currentTab?.disabled;
  };

  return (
    <>
      <ExampleSection header="XL Size" text="Высота 56 px">
        <ActionBar
          items={itemsMap}
          renderActionBarItem={renderActionBarItemHOC('xl')}
          renderDropMenuItem={renderDropMenuItemHOC('xl')}
          itemIsDisabled={itemIsDisabled}
          dimension="xl"
          style={{ width: '80%' }}
        />
      </ExampleSection>
      <ExampleSection header="L Size" text="Высота 48 px">
        <ActionBar
          items={itemsMap}
          renderActionBarItem={renderActionBarItemHOC('l')}
          renderDropMenuItem={renderDropMenuItemHOC('l')}
          itemIsDisabled={itemIsDisabled}
          dimension="xl"
          style={{ width: '80%' }}
        />
      </ExampleSection>
      <ExampleSection header="M Size" text="Высота 40 px">
        <ActionBar
          items={itemsMap}
          renderActionBarItem={renderActionBarItemHOC('m')}
          renderDropMenuItem={renderDropMenuItemHOC('m')}
          itemIsDisabled={itemIsDisabled}
          dimension="xl"
          style={{ width: '80%' }}
        />
      </ExampleSection>
      <ExampleSection header="S Size" text="Высота 32 px">
        <ActionBar
          items={itemsMap}
          renderActionBarItem={renderActionBarItemHOC('s')}
          renderDropMenuItem={renderDropMenuItemHOC('s')}
          itemIsDisabled={itemIsDisabled}
          dimension="xl"
          style={{ width: '80%' }}
        />
      </ExampleSection>
    </>
  );
};
