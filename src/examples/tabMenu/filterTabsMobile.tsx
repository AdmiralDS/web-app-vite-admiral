import { forwardRef, useMemo, useState } from 'react';
import { FilterTab, FilterTabBadge, FilterTabIcon, FilterTabProps, FilterTabs, TabText } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';

import { ExampleSection, MobileTopContainer } from '#examples/-helpers';

interface TabContentProps extends FilterTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

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
  { text: 'Text7777 is very long', tabId: '7' },
  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9' },
];

export const FilterTabsMobileExample = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('3');

  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomFilterTab
        dimension="m"
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
    <ExampleSection text="Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии. Рекомендуется использовать для мобильной версии.">
      <MobileTopContainer>
        <FilterTabs
          dimension="m"
          mobile
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </MobileTopContainer>
    </ExampleSection>
  );
};
