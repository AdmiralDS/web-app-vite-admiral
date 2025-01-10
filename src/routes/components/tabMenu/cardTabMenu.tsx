import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import {
  CardTab,
  CardTabMenuHorizontal,
  HorizontalTabProps,
  MenuItem,
  RenderOptionProps,
  TabBadge,
  TabIcon,
  TabText,
} from '@admiral-ds/react-ui';

import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import WifiOutline from '@admiral-ds/icons/build/communication/WifiOutline.svg?react';
import PhoneOutline from '@admiral-ds/icons/build/communication/PhoneOutline.svg?react';
import SIMCardOutline from '@admiral-ds/icons/build/communication/SIMCardOutline.svg?react';
import HeadsetOutline from '@admiral-ds/icons/build/communication/HeadsetOutline.svg?react';
import SignalOutline from '@admiral-ds/icons/build/communication/SignalOutline.svg?react';
import TelegrammOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
  { text: 'Viber', tabId: '9', badge: 7 },
  { text: 'Headset', tabId: '4', icon: <HeadsetOutline /> },
  { text: 'Network signal', tabId: '5', icon: <SignalOutline /> },
  { text: 'TelegrammOutline', tabId: '6', icon: <TelegrammOutline /> },
  { text: 'WhatsApp is very very very very long', tabId: '7' },
  { text: 'ICQ', tabId: '8', icon: <MinusCircleOutline />, disabled: true },
];

const Wrapper = styled.div`
  background-color: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  height: auto;
  border-radius: 4px;
`;

const Content = styled.div`
  background-color: white;
  height: 50px;
  border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  border-top-width: 0;
  border-radius: 0 0 4px 4px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <CardTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <TabBadge disabled={disabled} selected={selected}>
            {badge}
          </TabBadge>
        )}
      </CardTab>
    );
  },
);

export const Template = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');

  const tabsMap = tabs.map((tab) => tab.tabId);

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension="l"
        tabId={tabId}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension="l" {...options} key={tabId}>
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент для переключения между группами логически связанного контента. Существует в двух размерах - L 48
              и M 40 px по высоте. Опционально может содержать иконки и/или бейджи. Можно удалять, добавлять вкладки.
              При переполнении включается Overflow Menu.
            </PStyled>
            <PStyled>
              Рекомендации
              <li>При загрузке страницы, одна из вкладок должна быть активной по дефолту</li>
              <li>Текст в закладке должен быть коротким, в идеале не более трех слов</li>
              <li>
                Избегайте большого количества закладок — это не удобно для пользователей. В таких случаях можно
                использовать компонент Tree View
              </li>
              <li>Избегайте помещения компонента Card Tabs внутрь контента другого Card Tabs</li>
              <li>
                Не заставляйте пользователя переключаться между вкладками для сравнения информации. Отдельная закладка
                должна содержать в себе всю необходимую информацию для завершения задания.
              </li>
            </PStyled>
            <PStyled>
              Для большей выразительности рекомендуется применять компонент на сером фоне. Активная вкладка имеет фон
              белого цвета по умолчанию, так же рекомендуется красить подложку контентной области в белый цвет и
              добавлять обводку с трех сторон. В таком случае связь контента с закладкой более очевидна.
            </PStyled>
          </>
        }
      >
        <Wrapper>
          <CardTabMenuHorizontal
            dimension="l"
            showUnderline
            selectedTabId={selectedTab}
            defaultSelectedTabId="3"
            onSelectTab={handleSelectTab}
            tabsId={tabsMap}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab}
            tabIsDisabled={tabIsDisabled}
          />
          <Content />
        </Wrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tabMenu/cardTabMenu')({
  component: () => <Template />,
  staticData: {
    title: 'CardTabMenu. Базовый пример',
  },
});
