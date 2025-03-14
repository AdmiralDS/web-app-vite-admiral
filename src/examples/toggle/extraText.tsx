import styled from 'styled-components';

import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const ToggleExtraText = () => {
  return (
    <>
      <ExampleSection text="Текст справа">
        <Toggle extraText="Add text">Text</Toggle>
        <Separator />
        <Toggle extraText="Add text" dimension="s">
          Text
        </Toggle>
      </ExampleSection>
      <ExampleSection text="Текст слева">
        <Toggle labelPosition="left" extraText="Add text">
          Text
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" extraText="Add text" dimension="s">
          Text
        </Toggle>
      </ExampleSection>
    </>
  );
};
