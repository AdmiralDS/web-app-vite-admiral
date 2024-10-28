import { Drawer, DrawerTitle, typography } from '@admiral-ds/react-ui';
import styled from 'styled-components';

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
