import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import {
  CardTab,
  CardTabMenuHorizontal,
  CardTabMenuHorizontalLeadingGapWrapper,
  HorizontalTabProps,
  MenuItem,
  RenderOptionProps,
  TabBadge,
  TabIcon,
  TabText,
} from '@admiral-ds/react-ui';

import WifiOutline from '@admiral-ds/icons/build/communication/WifiOutline.svg?react';
import PhoneOutline from '@admiral-ds/icons/build/communication/PhoneOutline.svg?react';
import SIMCardOutline from '@admiral-ds/icons/build/communication/SIMCardOutline.svg?react';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
];

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
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension="l"
        tabId={tabId}
        text={text}
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
              В некоторых сценариях нужен отступ слева (полоска снизу слева от первой вкладки), что бы вставлять
              компонент во фреймы с обводкой, например карточки.
            </PStyled>
            <PStyled>
              В таких сценариях добавляйте такой же или больший отступ справа. Значение может быть произвольным и
              зависит от сценария.
            </PStyled>
          </>
        }
      >
        <CardTabMenuHorizontalLeadingGapWrapper $horizontalPaddingSize={16}>
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
        </CardTabMenuHorizontalLeadingGapWrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tabMenu/withPadding')({
  component: () => <Template />,
  staticData: {
    title: 'CardTabMenu. С отступами',
  },
});
