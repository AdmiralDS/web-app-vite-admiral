import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';

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

export const ButtonGroupSizes = () => (
  <Wrapper>
    <T font="Body/Body 1 Long">Dimension XL</T>
    <ButtonGroup>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <T font="Body/Body 1 Long">Dimension L</T>
    <ButtonGroup dimension="l">
      <Button>Button 48</Button>
      <Button>Button 48</Button>
      <Button>Button 48</Button>
    </ButtonGroup>
    <T font="Body/Body 1 Long">Dimension M</T>
    <ButtonGroup dimension="m">
      <Button>Button 40</Button>
      <Button>Button 40</Button>
      <Button>Button 40</Button>
    </ButtonGroup>
    <T font="Body/Body 1 Long">Dimension S</T>
    <ButtonGroup dimension="s">
      <Button>Button 32</Button>
      <Button>Button 32</Button>
      <Button>Button 32</Button>
    </ButtonGroup>
  </Wrapper>
);

export const Route = createFileRoute('/components/buttonGroup/sizes')({
  component: () => <ButtonGroupSizes />,
  staticData: {
    title: 'ButtonGroup. Размеры.',
    description: 'Представлен в размерах: XL - высота 56 px, L - высота 48 px, M - высота 40 px и S - высота 32 px.',
  },
});
