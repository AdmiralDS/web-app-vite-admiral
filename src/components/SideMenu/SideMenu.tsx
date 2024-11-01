import { ScrollContainer } from '@admiral-ds/react-ui';
import { MenuItem, ExpandedMenuItem } from './MenuItem';
import { MenuTitle } from './MenuTitle';
import { components } from './data';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 288px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 22px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

const MenuContent = styled(ScrollContainer)`
  padding-right: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideMenu = () => {
  return (
    <MenuWrapper>
      <MenuTitle title="Admiral" version="V 8.4.0" />

      <MenuContent>
        <ExpandedMenuItem title="Get Started" className="topLevel" to="/general/resources" defaultExpanded>
          <MenuItem title="Resources" to="/general/resources" />
        </ExpandedMenuItem>

        <ExpandedMenuItem title="Components" className="topLevel">
          {components.map(({ name, path, routes }) => (
            <ExpandedMenuItem key={'secondLevel' + name} title={name} to={path}>
              {routes.map(({ name, path }) => (
                <MenuItem key={'thirdLevel' + name} title={name} to={path} className="example" />
              ))}
            </ExpandedMenuItem>
          ))}
        </ExpandedMenuItem>
      </MenuContent>
    </MenuWrapper>
  );
};
