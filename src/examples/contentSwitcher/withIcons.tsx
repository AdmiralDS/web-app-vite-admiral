import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';

import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection } from '#examples/-helpers';

const Divider = styled.div`
  width: 10px;
`;

export const ContentSwitcherWithIcon = () => {
  return (
    <ExampleSection>
      <ContentSwitcher dimension={'l'}>
        <ContentSwitcherItem active>
          <StarSolid width={20} />
          <Divider />
          Active button
        </ContentSwitcherItem>
        <ContentSwitcherItem>
          <StarSolid width={20} />
          <Divider />
          Default button
        </ContentSwitcherItem>
        <ContentSwitcherItem disabled>
          Disabled button
          <Divider />
          <StarSolid width={17} />
        </ContentSwitcherItem>
      </ContentSwitcher>
    </ExampleSection>
  );
};
