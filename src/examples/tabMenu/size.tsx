import { ExampleSection } from '#examples/-helpers';
import {
  HorizontalTab,
  HorizontalTabProps,
  MenuItem,
  RenderOptionProps,
  TabBadge,
  TabIcon,
  TabMenuHorizontal,
  TabText,
} from '@admiral-ds/react-ui';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabs = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3', disabled: true },
  { text: 'Text4444', tabId: '4' },
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

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
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
      </HorizontalTab>
    );
  },
);

export const TabMenuHorizontalComponent = ({ dimension = 'l' }: { dimension: 'l' | 'm' }) => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');

  const tabsMap = tabs.map((tab) => tab.tabId);

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;

    return (
      <CustomHorizontalTab
        dimension={dimension}
        tabId={tabId}
        text={text}
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
        <MenuItem dimension={dimension} {...options} key={tabId}>
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
    <TabMenuHorizontal
      dimension={dimension}
      showUnderline
      selectedTabId={selectedTab}
      defaultSelectedTabId="3"
      onSelectTab={handleSelectTab}
      tabsId={tabsMap}
      renderDropMenuItem={renderDropMenuItem}
      renderTab={renderTab}
      tabIsDisabled={tabIsDisabled}
    />
  );
};

export const SizeExample = () => {
  return (
    <>
      <ExampleSection text="Размер L">
        <TabMenuHorizontalComponent dimension="l" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <TabMenuHorizontalComponent dimension="m" />
      </ExampleSection>
    </>
  );
};
