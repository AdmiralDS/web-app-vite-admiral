import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Spinner } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div<{ $inverse?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  ${({ theme, $inverse }) =>
    $inverse && `background: var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  > * {
    flex: 0 0 auto;
    margin: 24px;
  }
`;

const StyledButton = styled(Button)`
  padding: 0 8px;
`;

export const SpinnerWithOtherComponents = () => {
  return (
    <ExampleSection text="В составе Button">
      <Layout>
        <StyledButton dimension="m" appearance="secondary">
          <Spinner dimension="m" />
        </StyledButton>
        <StyledButton dimension="m" appearance="primary">
          <Spinner dimension="m" inverse />
        </StyledButton>
      </Layout>
    </ExampleSection>
  );
};
