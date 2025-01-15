import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Button, Link, Spinner } from '@admiral-ds/react-ui';
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

export const Template = () => {
  return (
    <>
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
      <ExampleSection text="В составе Link">
        <Layout>
          <Link
            appearance="secondary"
            dimension="m"
            href=""
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
          >
            <Spinner style={{ marginRight: '8px' }} dimension="m" />
            Link
          </Link>
        </Layout>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/spinner/withOtherComponents')({
  component: () => <Template />,
  staticData: {
    title: 'Spinner. В составе других компонентов',
  },
});
