import { createFileRoute } from '@tanstack/react-router';
import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

export const ButtonGroupStyles = () => (
  <ContentArea>
    <T font="Body/Body 1 Long">Primary</T>
    <ButtonGroup>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <T font="Body/Body 1 Long">Secondary</T>
    <ButtonGroup appearance="secondary">
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <T font="Body/Body 1 Long">Tertiary</T>
    <ButtonGroup appearance="tertiary">
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
  </ContentArea>
);

export const Route = createFileRoute('/components/buttonGroup/styles')({
  component: () => <ButtonGroupStyles />,
  staticData: {
    title: 'ButtonGroup. Стили',
    description: 'Представлен в вариантах Primary, Secondary и Tertiary.',
  },
});
