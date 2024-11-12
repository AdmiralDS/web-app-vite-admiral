import { ScrollContainer } from '@admiral-ds/react-ui';
import { MenuItem, ExpandedMenuItem } from './MenuItem';
import { MenuTitle } from './MenuTitle';
import { components } from './data';
import styled from 'styled-components';
import { version } from '@admiral-ds/react-ui/package.json';

const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 288px;
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
      <MenuTitle title="Admiral" version={version} />

      <MenuContent>
        <ExpandedMenuItem title="Get Started" className="topLevel" to="/general/resources">
          <MenuItem title="Resources" to="/general/resources" />
        </ExpandedMenuItem>

        <ExpandedMenuItem title="Components" className="topLevel" to="/components">
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
