import { forwardRef, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { IconTab, IconTabProps, TabMenuIcon, TabText } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';

import { ExampleSection, PStyled } from '../../-helpers/examples';

const tabs = [
  { text: 'Text01', tabId: '1', icon: <MinusCircleOutline /> },
  { text: 'Text02', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text03', tabId: '3', icon: <MinusCircleOutline /> },
  { text: 'Text04', tabId: '4', icon: <MinusCircleOutline /> },
  { text: 'Text05', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text06', tabId: '6', icon: <MinusCircleOutline /> },
  { text: 'Text07', tabId: '7', icon: <MinusCircleOutline /> },
  { text: 'Text08', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text09', tabId: '9', icon: <MinusCircleOutline /> },
  { text: 'Text10', tabId: '10', icon: <MinusCircleOutline /> },
  { text: 'Text11', tabId: '11', icon: <MinusCircleOutline /> },
  { text: 'Text12', tabId: '12', icon: <MinusCircleOutline /> },
  { text: 'Text13', tabId: '13', icon: <MinusCircleOutline /> },
];

interface TabContentProps extends IconTabProps {
  text: string;
  disabled?: boolean;
  icon: React.ReactNode;
}

const CustomIconTab = forwardRef<HTMLButtonElement, TabContentProps>(
  ({ text, icon, tabId, ...props }: TabContentProps, ref) => {
    return (
      <IconTab {...props} tabId={tabId} ref={ref}>
        {icon}
        <TabText>{text}</TabText>
      </IconTab>
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
      <CustomIconTab
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

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Альтернативный вариант табов. Существует в одном размере - 68px по высоте. Может применяться, например, для
            отображения банковских карт пользователя.
          </PStyled>
          <PStyled>
            Компонент можно использовать без линии снизу. В случае переполнения появляются кнопки “листания” вкладок. В
            крайних положениях (справа/слева) соответствующие кнопки стрелок исчезают.
          </PStyled>
        </>
      }
    >
      <div style={{ maxWidth: '800px' }}>
        <TabMenuIcon
          showUnderline
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </div>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tabMenu/tabMenuIcon')({
  component: () => <Template />,
  staticData: {
    title: 'TabMenuIcon. Базовый пример',
  },
});
