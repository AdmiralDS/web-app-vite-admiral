import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const ButtonGroupStyles = () => (
  <>
    <ExampleSection text="Primary">
      <ButtonGroup>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
      </ButtonGroup>
    </ExampleSection>
    <ExampleSection text="Secondary">
      <ButtonGroup appearance="secondary">
        <Button>Button 56</Button>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
      </ButtonGroup>
    </ExampleSection>
    <ExampleSection text="Tertiary">
      <ButtonGroup appearance="tertiary">
        <Button>Button 56</Button>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
      </ButtonGroup>
    </ExampleSection>
  </>
);
