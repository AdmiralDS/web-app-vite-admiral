import { Drawer, DrawerTitle, typography, ScrollContainer } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { MenuItem } from './Menu/MenuItem';

const CurrentVersion = styled.div`
  color: var(--admiral-color-Neutral_neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${typography['Caption/Caption 2']}
  margin-left: 4px;
  bottom: 5px;
`;

type SideBarProps = {
  isOpen?: boolean;
};

export const SideMenu = ({ isOpen = false }: SideBarProps) => {
  return (
    <Drawer isOpen={isOpen} position="left" displayCloseIcon={false} style={{ width: '288px', minWidth: '288px' }}>
      <DrawerTitle>
        Admiral<CurrentVersion>V 2.1.3</CurrentVersion>
      </DrawerTitle>
    </Drawer>
  );
};

const navigation = [
  { name: 'Get started', routes: [{ name: 'Resources', to: 'getstarted/resources', routes: [] }] },
  {
    name: 'Components',
    routes: [
      {
        name: 'Table',
        to: 'components/table/example1',
        routes: [
          { name: 'example1', to: '/components/table/example1' },
          { name: 'example2', to: '/components/table/example2' },
        ],
      },
    ],
  },
];

export const Menu = () => {
  return (
    <ScrollContainer style={{ width: '288px', paddingRight: '12px' }}>
      {navigation.map((level1) => (
        <MenuItem key={level1.name} id={level1.name} title={level1.name} expandable>
          {level1.routes.map((level2) =>
            level2.routes.length ? (
              <MenuItem key={level2.name} id={level2.name} title={level2.name} expandable>
                {level2.routes.map((level3) => (
                  <MenuItem key={level3.name} title={level3.name} id={level3.name} />
                ))}
              </MenuItem>
            ) : (
              <MenuItem key={level2.name} title={level2.name} id={level2.name} />
            ),
          )}
        </MenuItem>
      ))}
    </ScrollContainer>
  );
};
