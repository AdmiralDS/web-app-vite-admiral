import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';

import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const Divider = styled.div`
  width: 10px;
`;

export const ContentSwitcherWithIcon = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/contentSwitcher/withIcons')({
  component: () => <ContentSwitcherWithIcon />,
  staticData: {
    title: 'ContentSwitcher. С иконками',
    description:
      'В компоненте можно включать иконки, бэйджи или только иконки, а также дополнительные секции через панель Variants.',
  },
});
