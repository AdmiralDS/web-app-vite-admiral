import styled from 'styled-components';
import { useMemo, useState } from 'react';

import { ExampleSection } from '#routes/-helpers/examples';
import {
  CategoryMenuItem,
  Menu,
  MenuItem,
  MenuModelItemProps,
  type RenderOptionProps,
  typography,
} from '@admiral-ds/react-ui';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';
import { MenuWrapper } from '#routes/-helpers/menu';

const items = [
  {
    name: 'Категория 1',
    id: '1',
    content: [
      {
        id: '2',
        label: 'Номер Карты /****45',
        value: 1,
      },
      {
        id: '3',
        label: 'Номер Карты /****75',
        value: 2,
      },
      { id: '4', label: 'Номер Карты /****22', value: 3 },
      {
        id: '5',
        label: 'Номер Карты /****33',
        value: 4,
      },
    ],
  },
  {
    name: 'Категория 2',
    id: '9',
    content: [
      {
        id: '10',
        label: 'Номер Карты /****21',
        value: 5,
      },
      {
        id: '11',
        label: 'Номер Карты /****35',
        value: 6,
      },
      { id: '12', label: 'Номер Карты /****39', value: 7 },
      {
        id: '13',
        label: 'Номер Карты /****41',
        value: 8,
      },
    ],
  },
];

const StyledMenuItem = styled(MenuItem)`
  padding: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  flex-direction: column;
  align-items: flex-start;
`;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

export const MenuCategories = () => {
  const dimension = 'l';
  const model = useMemo(() => {
    return items.reduce((acc: MenuModelItemProps[], item) => {
      acc.push({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <CategoryMenuItem dimension={dimension} key={item.id} {...options}>
            {item.name}
          </CategoryMenuItem>
        ),
      });
      return acc.concat(
        item.content.map((subitem) => {
          return {
            id: subitem.id,
            render: (options: RenderOptionProps) => (
              <StyledMenuItem dimension={dimension} key={subitem.id} {...options}>
                <InnerContainer>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {subitem.label} <CardSolid width={24} height={24} />
                  </div>
                  <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
                </InnerContainer>
              </StyledMenuItem>
            ),
          };
        }),
      );
    }, []);
  }, [dimension]);

  const [selected, setSelected] = useState<string | undefined>('');
  const [active, setActive] = useState<string | undefined>('');

  return (
    <ExampleSection>
      <MenuWrapper style={{ width: 'fit-content' }}>
        <Menu
          defaultIsActive={false}
          model={model}
          selected={selected}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
        />
      </MenuWrapper>
    </ExampleSection>
  );
};
