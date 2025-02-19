import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const WrapperVertical = styled.div`
  display: flex;
  margin-top: 16px;
`;

const DividerType = () => {
  return (
    <>
      <ExampleSection text={'Толщина линии s'}>
        <Divider dimension="s" />
        <WrapperVertical>
          <Divider dimension="s" orientation="vertical" length="150px" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text={'Толщина линии m - default'}>
        <Divider />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" />
        </WrapperVertical>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/divider/thikness')({
  component: () => <DividerType />,
  staticData: {
    title: 'Divider. Толщина линии (dimension)',
    description: 'Размер компонента, определяет толщину разделителя "s","m"',
  },
});
