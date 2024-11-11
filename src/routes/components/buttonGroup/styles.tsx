import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';

export const ButtonGroupStyles = () => (
  <Wrapper>
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
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

export const Route = createFileRoute('/components/buttonGroup/styles')({
  component: () => <ButtonGroupStyles />,
  staticData: {
    title: 'ButtonGroup. Стили',
    description: 'Представлен в вариантах Primary, Secondary и Tertiary.',
  },
});
