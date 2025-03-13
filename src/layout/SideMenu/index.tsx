import { ScrollContainer } from '@admiral-ds/react-ui';
import { MenuItem, ExpandedMenuItem } from './MenuItem';
import { MenuTitle } from './MenuTitle';
import { components as data } from '#examples/examples.json';
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

const components = data.sort((a, b) => (a.name > b.name ? 1 : -1));

export const SideMenu = () => {
  return (
    <MenuWrapper>
      <MenuTitle title="Admiral" version={version} />

      <MenuContent>
        <ExpandedMenuItem title="Get Started" className="topLevel" to="/general/resources">
          <MenuItem title="Resources" to="/general/resources" />
          <MenuItem title="Installation" to="/general/installation" />
          <MenuItem title="Usage" to="/general/usage" />
          <MenuItem title="FAQs" to="/general/faqs" />
        </ExpandedMenuItem>

        <ExpandedMenuItem title="Components" className="topLevel" to="/components">
          {components.map(({ name, path, routes }) => (
            <ExpandedMenuItem key={'secondLevel' + name} className="secondLevel" title={name} to={path}>
              {routes.map(({ name, path }) => (
                <MenuItem key={'thirdLevel' + name} className="example thirdLevel" title={name} to={path} />
              ))}
            </ExpandedMenuItem>
          ))}
        </ExpandedMenuItem>
      </MenuContent>
    </MenuWrapper>
  );
};
