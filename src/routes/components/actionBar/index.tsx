import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import type { RenderOptionProps } from '@admiral-ds/react-ui';
import {
  ActionBar,
  ActionBarItemWithTooltip,
  ActionBarDropMenuItem,
  NotificationItem,
  NotificationItemContent,
} from '@admiral-ds/react-ui';

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

import { ContentArea } from '../../-helpers/examples';

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

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const ActionBarTemplate = () => {
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
    <ContentArea>
      <ActionBar
        items={itemsMap}
        renderActionBarItem={renderActionBarItem}
        renderDropMenuItem={renderDropMenuItem}
        itemIsDisabled={itemIsDisabled}
        dimension={dimension}
        style={{ width: '80%' }}
      />
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>
          Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав
          компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.
          <Separator height={8} />
          Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S
          (32).
          <Separator height={8} />
          По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева,
          сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл кнопки
          очевиден, опционально можно отключать тултип.
          <Separator height={8} />
          Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры
          выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При
          изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu,
          добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой
          внутри меню.
        </NotificationItemContent>
      </NotificationItem>
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/actionBar/')({
  component: () => <ActionBarTemplate />,
  staticData: {
    title: 'ActionBar. Базовый пример',
    description: 'Панель действий с возможностью деления на логические группы с помощью разделителя.',
  },
});
