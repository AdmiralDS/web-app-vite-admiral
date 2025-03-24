import { forwardRef, useMemo, useState } from 'react';
import { FilterTab, FilterTabBadge, FilterTabIcon, FilterTabProps, FilterTabs, TabText } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';

import { ExampleSection, PStyled } from '#examples/-helpers';

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

export const FilterTabsExample = () => {
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
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент используется для переключения контента объединённого общей логикой. Существует в двух размерах – M
            (40) и S (32) по высоте. При переполнении появляются кнопки скроллирования по горизонтали.
          </PStyled>
          <PStyled>
            Скроллить так же можно колесиком мышки, когда курсор находится над компонентом. При прокручивании колесика
            вниз, вкладки скроллятся влево и наоборот. Дополнительно можно скроллить зажав ЛКМ над компонентом и
            «потянув» в нужную сторону.
          </PStyled>
        </>
      }
    >
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
    </ExampleSection>
  );
};
