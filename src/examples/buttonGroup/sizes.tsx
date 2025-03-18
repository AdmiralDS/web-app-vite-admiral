import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const ButtonGroupSizes = () => (
  <>
    <ExampleSection text="Dimension XL">
      <ButtonGroup>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
        <Button>Button 56</Button>
      </ButtonGroup>
    </ExampleSection>
    <ExampleSection text="Dimension L">
      <ButtonGroup dimension="l">
        <Button>Button 48</Button>
        <Button>Button 48</Button>
        <Button>Button 48</Button>
      </ButtonGroup>
    </ExampleSection>
    <ExampleSection text="Dimension M">
      <ButtonGroup dimension="m">
        <Button>Button 40</Button>
        <Button>Button 40</Button>
        <Button>Button 40</Button>
      </ButtonGroup>
    </ExampleSection>
    <ExampleSection text="Dimension S">
      <ButtonGroup dimension="s">
        <Button>Button 32</Button>
        <Button>Button 32</Button>
        <Button>Button 32</Button>
      </ButtonGroup>
    </ExampleSection>
  </>
);
