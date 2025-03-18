import { ExampleSection } from '#examples/-helpers';
import {
  MenuItem,
  RenderOptionProps,
  TabIcon,
  TabMenuVertical,
  TabText,
  VerticalTab,
  VerticalTabProps,
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

interface TabContentProps extends VerticalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface CustomVerticalTabProps extends TabContentProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  ({ dimension = 'l', disabled, selected, onSelectTab, icon, tabId, text, ...props }: CustomVerticalTabProps, ref) => {
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
      </VerticalTab>
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
      <CustomVerticalTab
        tabId={tabId}
        dimension={dimension}
        text={text}
        key={tabId}
        selected={selected}
        disabled={disabled}
        width={'260px'}
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
    <div style={{ height: '250px', display: 'flex' }}>
      <TabMenuVertical
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
    </div>
  );
};

export const SizeVerticalTabsExample = () => {
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
