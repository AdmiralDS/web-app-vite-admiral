import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { PseudoText, skeletonAnimationMixin } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const StyledPseudoText = styled(PseudoText)`
  ${skeletonAnimationMixin};
`;

export const Template = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <PseudoText dimension="s" appearance="primary" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <PseudoText dimension="m" appearance="primary" />
      </ExampleSection>
      <ExampleSection text="С анимацией">
        <StyledPseudoText dimension="m" appearance="primary" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/skeleton/pseudoText')({
  component: () => <Template />,
  staticData: {
    title: 'Skeleton. PseudoText',
  },
});
