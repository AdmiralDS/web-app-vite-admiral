import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import {
  HorizontalTab,
  HorizontalTabProps,
  MenuItem,
  RenderOptionProps,
  TabMenuHorizontal,
  TabText,
} from '@admiral-ds/react-ui';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const tabs = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4' },
  { text: 'Text55555', tabId: '5', disabled: true },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8' },
  { text: 'Text99', tabId: '9' },
  { text: 'Text01', tabId: '10' },
  { text: 'Text11', tabId: '11' },
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
  ({ dimension = 'l', disabled, selected, tabId, text, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        <TabText>{text}</TabText>
      </HorizontalTab>
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

    return (
      <CustomHorizontalTab
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
              Размеры выпадающего меню соответствуют размерам Tab Menu — L для L размера и M для M размера
            </PStyled>
            <PStyled>
              В выпадающем меню отображаются вкладки не поместившиеся в основной ряд. При выборе вкладки из меню – она
              отображается в основном ряду крайней справа, заменяя собой предыдущую крайнюю вкладку, которая, в свою
              очередь, «уходит» в меню. Активная вкладка при этом отображается в меню, как выбранная.
            </PStyled>
          </>
        }
      >
        <TabMenuHorizontal
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
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tabMenu/withOverflowMenu')({
  component: () => <Template />,
  staticData: {
    title: 'TabMenu. С Overflow Menu',
  },
});
