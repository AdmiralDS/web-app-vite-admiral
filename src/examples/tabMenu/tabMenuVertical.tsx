import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import {
  MenuItem,
  RenderOptionProps,
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
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4' },
  { text: 'Text55555', tabId: '5', disabled: true },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8' },
  { text: 'Text99', tabId: '9' },
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
  ({ dimension = 'l', disabled, selected, onSelectTab, tabId, text, ...props }: CustomVerticalTabProps, ref) => {
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
        <TabText>{text}</TabText>
      </VerticalTab>
    );
  },
);

export const TabMenuVerticalExample = () => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');

  const tabsMap = tabs.map((tab) => tab.tabId);

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;

    return (
      <CustomVerticalTab
        tabId={tabId}
        dimension="l"
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
              Вариант компонента с вертикальной компоновкой, используется для переключения между вкладками. Существует в
              двух размерах - L и M. У компонента так же есть два варианта компоновки и переключения позиции табов:
              справа и слева. Ширина компонента задается пользователем. Опционально можно выключать серую полоску сбоку
              и управлять её позицией (справа/слева). В закладках можно включать иконки, бэйджи.
            </PStyled>
            <PStyled>
              Если название таба длинное, оно уходит под многоточие в зависимости от ширины таб меню. Дефолтная ширина
              компонента на странице задается пользователем. При адаптации вместе с шириной комопнента уменьшается зона
              текстового поля, так как она занимает всю ширину компонента.
            </PStyled>
            <PStyled>
              Если вкладки не помещаются в отведенную высоту целиком, то включается Overflow Menu. Размеры выпадающего
              меню соответствуют размерам Tab Menu — L для L размера и M для M размера В выпадающем меню отображаются
              вкладки не поместившиеся в основной столбец. При выборе вкладки из меню – она отображается в основном
              столбце крайней снизу, заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в меню.
              Активная вкладка при этом отображается в меню, как выбранная. При увеличении высоты Vertical Tab Menu,
              скрытые вкладки становятся видимыми, покидая выпадающее меню и наоброт.
            </PStyled>
            <PStyled>
              В связи с особенностями компоновки на мобильных устройствах рекомендуется применять горизонтальную версию
              компонента Horizontal Tab Menu.
            </PStyled>
          </>
        }
      >
        <div style={{ height: '300px', display: 'flex' }}>
          <TabMenuVertical
            dimension="l"
            showUnderline
            underlinePosition="right"
            selectedTabId={selectedTab}
            defaultSelectedTabId="3"
            onSelectTab={handleSelectTab}
            tabsId={tabsMap}
            renderTab={renderTab}
            renderDropMenuItem={renderDropMenuItem}
            tabIsDisabled={tabIsDisabled}
          />
        </div>
      </ExampleSection>
    </>
  );
};
