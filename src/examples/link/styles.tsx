import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Link } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Primary">
        <Link
          dimension="m"
          appearance="primary"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Dimension - M
        </Link>
        <Link
          dimension="s"
          appearance="primary"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Dimension - S
        </Link>
      </ExampleSection>
      <ExampleSection text="Secondary">
        <Link
          dimension="m"
          appearance="secondary"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Dimension - M
        </Link>
        <Link
          dimension="s"
          appearance="secondary"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Dimension - S
        </Link>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/link/styles')({
  component: () => <Template />,
  staticData: {
    title: 'Link. Стили',
    description: 'Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).',
  },
});
