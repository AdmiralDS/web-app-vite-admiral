import { createFileRoute } from '@tanstack/react-router';
import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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

export const Route = createFileRoute('/components/buttonGroup/sizes')({
  component: () => <ButtonGroupSizes />,
  staticData: {
    title: 'ButtonGroup. Размеры.',
    description: 'Представлен в размерах: XL - высота 56 px, L - высота 48 px, M - высота 40 px и S - высота 32 px.',
  },
});
