import { forwardRef, useMemo, useState } from 'react';
import { FilterTab, FilterTabBadge, FilterTabIcon, FilterTabProps, FilterTabs, TabText } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';

import { ExampleSection } from '#examples/-helpers';

interface ContentProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  tabId: string;
}

interface TabContentProps extends FilterTabProps, Omit<ContentProps, 'tabId'> {}

interface CustomFilterTabProps extends TabContentProps {}
const CustomFilterTab = forwardRef<HTMLButtonElement, CustomFilterTabProps>(
  (
    { dimension = 'm', disabled, selected, onSelectTab, tabId, text, icon, badge, ...props }: CustomFilterTabProps,
    ref,
  ) => {
    return (
      <FilterTab
        {...props}
        ref={ref}
        tabId={tabId}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        {icon && (
          <FilterTabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </FilterTabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <FilterTabBadge disabled={disabled} selected={selected}>
            {badge}
          </FilterTabBadge>
        )}
      </FilterTab>
    );
  },
);

const tabs = [
  { text: 'Text1', tabId: '1', badge: 1 },
  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4', badge: 4 },
  { text: 'Text55555', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9' },
  { text: 'Text1010', tabId: '10', badge: 4 },
  { text: 'Text11111', tabId: '11', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text121212', tabId: '12' },
  { text: 'Text131313 is very very very very long', tabId: '13' },
  { text: 'Text141414', tabId: '14', icon: <MinusCircleOutline /> },
  { text: 'Text151515', tabId: '15' },
];

const tabsSizeS = [
  { text: 'Text1', tabId: '1-1', badge: 1 },
  { text: 'Text22', tabId: '2-2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3-3' },
  { text: 'Text4444', tabId: '4-4', badge: 4 },
  { text: 'Text55555', tabId: '5-5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text66666', tabId: '6-6' },
  { text: 'Text7777 is very very very very long', tabId: '7-7' },
  { text: 'Text888', tabId: '8-8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9-9' },
  { text: 'Text1010', tabId: '10-10', badge: 4 },
  { text: 'Text11111', tabId: '11-11', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text121212', tabId: '12-12' },
  { text: 'Text131313 is very very very very long', tabId: '13-13' },
  { text: 'Text141414', tabId: '14-14', icon: <MinusCircleOutline /> },
  { text: 'Text151515', tabId: '15-15' },
];

export const FilterTabsSizeExample = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('3');
  const [selectedTabSizeS, setSelectedTabSizeS] = useState<string | undefined>('3');

  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const tabsMapSizeS = useMemo(() => {
    return tabsSizeS.map((tab) => tab.tabId);
  }, [tabs]);

  const tabIsDisabled = (tabId: string, tabs: ContentProps[]) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const renderTab = (
    tabId: string,
    tabs: ContentProps[],
    selected?: boolean,
    onSelectTab?: (tabId: string) => void,
    size?: 'm' | 's',
  ) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomFilterTab
        dimension={size === 's' ? 's' : 'm'}
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

  return (
    <>
      <ExampleSection text="Размер S">
        <FilterTabs
          dimension="s"
          selectedTabId={selectedTabSizeS}
          defaultSelectedTabId="3"
          onSelectTab={(tabId: string) => setSelectedTabSizeS(tabId)}
          tabsId={tabsMapSizeS}
          renderTab={(tabId, selected, onSelectTab) => renderTab(tabId, tabsSizeS, selected, onSelectTab, 's')}
          tabIsDisabled={(tabId) => tabIsDisabled(tabId, tabsSizeS)}
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <FilterTabs
          dimension="m"
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={(tabId: string) => setSelectedTab(tabId)}
          tabsId={tabsMap}
          renderTab={(tabId, selected, onSelectTab) => renderTab(tabId, tabs, selected, onSelectTab)}
          tabIsDisabled={(tabId) => tabIsDisabled(tabId, tabs)}
        />
      </ExampleSection>
    </>
  );
};
