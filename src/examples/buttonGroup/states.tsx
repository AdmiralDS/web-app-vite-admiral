import styled from 'styled-components';

import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import type { ButtonGroupProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupStates = () => (
  <>
    <ExampleSection text="Disable (вторая внопка)">
      {appearanceMap.map((appearance, index) => (
        <GroupWrapper key={'disable_' + index}>
          <ButtonGroup appearance={appearance}>
            <Button>Button 56</Button>
            <Button disabled>Button 56</Button>
            <Button>Button 56</Button>
          </ButtonGroup>
        </GroupWrapper>
      ))}
    </ExampleSection>
    <ExampleSection text="Loading (третья кнопка)">
      {appearanceMap.map((appearance, index) => (
        <GroupWrapper key={'loading' + index}>
          <ButtonGroup appearance={appearance}>
            <Button>Button 56</Button>
            <Button>Button 56</Button>
            <Button loading>Button 56</Button>
          </ButtonGroup>
        </GroupWrapper>
      ))}
    </ExampleSection>
  </>
);
