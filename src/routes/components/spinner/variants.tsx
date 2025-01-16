import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Spinner } from '@admiral-ds/react-ui';
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

export const Template = () => {
  return (
    <>
      <ExampleSection>
        <Layout>
          <Spinner dimension="xl" />
          <Spinner dimension="l" />
          <Spinner dimension="m" />
          <Spinner dimension="ms" />
          <Spinner dimension="s" />
        </Layout>
      </ExampleSection>
      <ExampleSection text="На темных поверхностях применяется белый спинер">
        <Layout $inverse>
          <Spinner dimension="xl" inverse />
          <Spinner dimension="l" inverse />
          <Spinner dimension="m" inverse />
          <Spinner dimension="ms" inverse />
          <Spinner dimension="s" inverse />
        </Layout>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/spinner/variants')({
  component: () => <Template />,
  staticData: {
    title: 'Spinner. Варианты',
    description: 'Spinner имеет 2 варианта отображения на темном и светлом фоне',
  },
});
