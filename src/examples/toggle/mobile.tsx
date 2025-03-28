import styled from 'styled-components';

import { ExampleSection } from '#examples/-helpers';
import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleMobile = () => {
  return (
    <>
      <ExampleSection text="Текст справа">
        <div style={{ width: '400px' }}>
          <Toggle labelPosition="left">Some label</Toggle>
          <Separator />
          <Toggle labelPosition="left" width="200px">
            Some label
          </Toggle>
          <Separator />
          <Toggle labelPosition="left" width={300}>
            Some label
          </Toggle>
          <Separator />
          <Toggle labelPosition="left" width="100%">
            Some label
          </Toggle>
        </div>
      </ExampleSection>
    </>
  );
};
