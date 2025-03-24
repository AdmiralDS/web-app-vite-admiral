import styled from 'styled-components';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const WrapperVertical = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const DividerThikness = () => {
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
