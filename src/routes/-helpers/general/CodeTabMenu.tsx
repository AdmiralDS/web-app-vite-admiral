import { HorizontalTabs, HorizontalTab, TabText } from '@admiral-ds/react-ui';
import type { HorizontalTabProps } from '@admiral-ds/react-ui';
import { useMemo, useState, forwardRef } from 'react';

const tabs = [
  { text: 'npm', tabId: '0' },
  { text: 'yarn', tabId: '1' },
  { text: 'pnpm', tabId: '2' },
  { text: 'bun', tabId: '3' },
];

interface TabContentProps extends HorizontalTabProps {
  text: string;
  disabled?: boolean;
}
interface CustomHorizontalTabProps extends TabContentProps {}

const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'm', disabled, selected, onSelectTab, tabId, text, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab
        {...props}
        ref={ref}
        tabId={tabId}
        disabled={disabled}
        dimension={dimension}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        <TabText>{text}</TabText>
      </HorizontalTab>
    );
  },
);

interface CodeTabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  updaterFn: (tabId: string) => void;
}

export const CodeTabMenu = ({ updaterFn, style }: CodeTabMenuProps) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);
  const [selectedTab, setSelectedTab] = useState<string | undefined>('0');

  const handleSelectTab = (tabId: string) => {
    updaterFn(tabId);
    setSelectedTab(tabId);
  };
  const tabIsDisabled = () => false;

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    return <CustomHorizontalTab tabId={tabId} text={text} key={tabId} selected={selected} onSelectTab={onSelectTab} />;
  };
  return (
    <>
      <HorizontalTabs
        showUnderline={false}
        selectedTabId={selectedTab}
        onSelectTab={handleSelectTab}
        tabsId={tabsMap}
        renderTab={renderTab}
        tabIsDisabled={tabIsDisabled}
        style={style}
      />
    </>
  );
};
