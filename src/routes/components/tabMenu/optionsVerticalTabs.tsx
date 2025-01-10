import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import {
  MenuItem,
  RenderOptionProps,
  TabIcon,
  TabMenuVertical,
  TabText,
  VerticalTab,
  VerticalTabBadge,
  VerticalTabProps,
} from '@admiral-ds/react-ui';

import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';
import HeadsetOutline from '@admiral-ds/icons/build/communication/HeadsetOutline.svg?react';
import SignalOutline from '@admiral-ds/icons/build/communication/SignalOutline.svg?react';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabs = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3', disabled: true },
  { text: 'Text4444', tabId: '4' },
];

const tabs2 = [
  { text: 'Text1', tabId: '1', icon: <HeadsetOutline /> },
  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3', icon: <MinusCircleOutline />, disabled: true },
  { text: 'Text4444', tabId: '4', icon: <SignalOutline /> },
];

const tabs3 = [
  { text: 'Text1', tabId: '1', badge: 1 },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3', badge: 3, disabled: true },
  { text: 'Text4444', tabId: '4', badge: 4 },
];

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 250px;
`;

interface TabContentProps extends VerticalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface CustomVerticalTabProps extends TabContentProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  (
    { dimension = 'l', disabled, selected, onSelectTab, icon, badge, tabId, text, ...props }: CustomVerticalTabProps,
    ref,
  ) => {
    return (
      <VerticalTab
        {...props}
        ref={ref}
        tabId={tabId}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <VerticalTabBadge disabled={disabled} selected={selected}>
            {badge}
          </VerticalTabBadge>
        )}
      </VerticalTab>
    );
  },
);

export const Template = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');
  const [selectedTab2, setSelectedTab2] = useState<string | undefined>('1');
  const [selectedTab3, setSelectedTab3] = useState<string | undefined>('1');
  const [selectedTab4, setSelectedTab4] = useState<string | undefined>('1');
  const [selectedTab5, setSelectedTab5] = useState<string | undefined>('1');

  const tabsMap = tabs.map((tab) => tab.tabId);
  const tabsMap2 = tabs2.map((tab) => tab.tabId);
  const tabsMap3 = tabs3.map((tab) => tab.tabId);

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = currentTab?.disabled;

    return (
      <CustomVerticalTab
        dimension="l"
        tabId={tabId}
        text={text}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };
  const renderTab2 = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs2.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = currentTab?.disabled;
    const icon = currentTab?.icon;

    return (
      <CustomVerticalTab
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

  const renderTab3 = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs3.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = currentTab?.disabled;
    const badge = currentTab?.badge;

    return (
      <CustomVerticalTab
        dimension="l"
        tabId={tabId}
        text={text}
        badge={badge}
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
  return (
    <>
      <ExampleSection text="Опционально можно выключать серую полоску снизу">
        <Wrapper>
          <TabMenuVertical
            dimension="l"
            showUnderline={false}
            selectedTabId={selectedTab}
            defaultSelectedTabId="3"
            onSelectTab={(tabId: string) => setSelectedTab(tabId)}
            tabsId={tabsMap}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab}
            tabIsDisabled={tabIsDisabled}
          />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="Можно настроить позиционирование табов">
        <Wrapper>
          <TabMenuVertical
            dimension="l"
            showUnderline
            selectedTabId={selectedTab2}
            defaultSelectedTabId="3"
            onSelectTab={(tabId: string) => setSelectedTab2(tabId)}
            tabsId={tabsMap}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab}
            tabIsDisabled={tabIsDisabled}
          />
          <TabMenuVertical
            dimension="l"
            underlinePosition="left"
            showUnderline
            selectedTabId={selectedTab3}
            defaultSelectedTabId="3"
            onSelectTab={(tabId: string) => setSelectedTab3(tabId)}
            tabsId={tabsMap}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab}
            tabIsDisabled={tabIsDisabled}
          />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="С иконками">
        <Wrapper>
          <TabMenuVertical
            dimension="l"
            showUnderline
            selectedTabId={selectedTab4}
            defaultSelectedTabId="3"
            onSelectTab={(tabId: string) => setSelectedTab4(tabId)}
            tabsId={tabsMap2}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab2}
            tabIsDisabled={tabIsDisabled}
          />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="С Бэйджами">
        <Wrapper>
          <TabMenuVertical
            dimension="l"
            showUnderline
            selectedTabId={selectedTab5}
            defaultSelectedTabId="3"
            onSelectTab={(tabId: string) => setSelectedTab5(tabId)}
            tabsId={tabsMap3}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab3}
            tabIsDisabled={tabIsDisabled}
          />
        </Wrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tabMenu/optionsVerticalTabs')({
  component: () => <Template />,
  staticData: {
    title: 'TabMenuHorizontal. Опции',
  },
});
