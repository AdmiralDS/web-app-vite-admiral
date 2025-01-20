import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { PseudoIcon, skeletonAnimationMixin } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const StyledPseudoIcon = styled(PseudoIcon)`
  ${skeletonAnimationMixin}
`;

export const Template = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <PseudoIcon dimension="s" appearance="primary" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <PseudoIcon dimension="m" appearance="primary" />
      </ExampleSection>
      <ExampleSection text="С анимацией">
        <StyledPseudoIcon dimension="m" appearance="primary" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/skeleton/pseudoIcon')({
  component: () => <Template />,
  staticData: {
    title: 'Skeleton. PseudoIcon',
  },
});
