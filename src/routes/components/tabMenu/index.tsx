import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
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
              Компонент используется для переключения между вкладками. Компонент полностью адаптивен и автоматически
              меняет ширину ячеек в зависимости от контента.
            </PStyled>
            <PStyled>
              Рекомендации
              <li>Одна из вкладок должна быть выбрана по умолчанию, когда пользователь загружает страницу.</li>
              <li>Рекомендовано делать надписи на вкладках как можно короче - в идеале не более двух слов.</li>
              <li>Не перегружайте пользователя слишком большим количеством вкладок.</li>
              <li>
                Если пользователь переходит на другую панель вкладок, данные формы не должны автоматически сохраняться
                или отправляться.
              </li>
              <li>Избегайте вложения Tab Menu в содержимое другого Tab Menu.</li>
              <li>
                Не заставляйте пользователей переключаться между несколькими вкладками для сравнения информации. Каждая
                панель вкладок должна содержать всю информацию, необходимую пользователю для выполнения своей задачи.
              </li>
              <li>
                Не помещайте кнопки или ссылки в заголовок вкладки. Вкладка уже является ссылкой или кнопкой, поэтому у
                нее не может быть дочернего элемента, который также является ссылкой или кнопкой.
              </li>
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

export const Route = createFileRoute('/components/tabMenu/')({
  component: () => <Template />,
  staticData: {
    title: 'TabMenuHorizontal. Базовый пример',
  },
});
