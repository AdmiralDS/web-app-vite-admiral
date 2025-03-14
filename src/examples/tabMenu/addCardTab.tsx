import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import {
  CardTab,
  CardTabMenuHorizontal,
  HorizontalTabProps,
  MenuItem,
  RenderOptionProps,
  TabBadge,
  TabCloseIconButton,
  TabIcon,
  TabText,
} from '@admiral-ds/react-ui';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabsBase: TabContentProps[] = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text2', tabId: '2' },
  { text: 'Text3', tabId: '3' },
  { text: 'Text4', tabId: '4' },
  { text: 'Text5', tabId: '5' },
  { text: 'Text6', tabId: '6' },
  { text: 'Text7', tabId: '7' },
  { text: 'Text8', tabId: '8' },
  { text: 'Text9', tabId: '9' },
];
let tabCount = tabsBase.length;

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
  onCloseTab?: (tabId: string) => void;
}

interface CustomHorizontalTabProps extends TabContentProps {}

const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', disabled, selected, tabId, text, badge, icon, onCloseTab, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    const handleCloseTab = () => {
      tabId && onCloseTab?.(tabId);
    };

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
        <TabCloseIconButton dimension={dimension} disabled={disabled} onCloseIconButtonClick={handleCloseTab} />
      </CardTab>
    );
  },
);

const getTabsMap = (tabs: TabContentProps[]) => {
  return tabs.map((tab) => tab.tabId || '');
};

export const AddCardTabExample = () => {
  const [tabs, setTabs] = useState(tabsBase);
  const [tabsMap, setTabsMap] = useState(getTabsMap(tabs));
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');

  const handleCloseTab = (tabId: string) => {
    if (tabs.length > 1) {
      const tabIndex = tabs.findIndex((tab) => tab.tabId === tabId);

      const newTabs = [...tabs];
      newTabs.splice(tabIndex, 1);

      if (tabId === selectedTab) {
        const newSelectedTab = newTabs[0].tabId;
        setSelectedTab(newSelectedTab);
      }

      setTabs(newTabs);
      setTabsMap(getTabsMap(newTabs));
    }
  };

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
        onCloseTab={handleCloseTab}
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

  const handleAddTab = () => {
    tabCount += 1;
    const newId = tabCount.toString();
    const newText = `Text${newId}`;
    const newTabs = [...tabs, { tabId: newId, text: newText }];
    setTabs(newTabs);
    setTabsMap(getTabsMap(newTabs));
    setSelectedTab(newId);
  };

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Рекомендации
              <li>При нажатии на иконку закрытия — владка и контент под ней удаляются.</li>
              <li>Если удалить текущую вкладку, то автоматически включится первая из оставшихся вкладок.</li>
              <li>При удалении не активной вкладки, вы остаетесь там же, где и были.</li>
              <li>Удалить все вкладки нельзя, должна остаться хотя бы одна вкладка.</li>
            </PStyled>
            <PStyled>
              Можно включать опцию добавления вкладок. Механика добавления вкладки настраивается пользователем. При
              переполнении вкладок (есть меню) кнопка добавления вкладки видна всегда.
            </PStyled>
          </>
        }
      >
        <CardTabMenuHorizontal
          dimension="l"
          showUnderline
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          onAddTab={handleAddTab}
          tabsId={tabsMap}
          renderDropMenuItem={renderDropMenuItem}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </ExampleSection>
    </>
  );
};
