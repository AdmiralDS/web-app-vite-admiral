import styled from 'styled-components';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const WrapperVertical = styled.div`
  display: flex;
  margin-top: 16px;
  height: 100%;
`;

export const DividerLength = () => {
  return (
    <>
      <ExampleSection text={'Длина линии, примеры в %'}>
        <Divider length="70%" />
        <WrapperVertical>
          <Divider orientation="vertical" length="70%" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text={'Длина линии, примеры в px'}>
        <Divider length={'200px'} />
        <WrapperVertical>
          <Divider orientation="vertical" length="200px" />
        </WrapperVertical>
      </ExampleSection>
    </>
  );
};
