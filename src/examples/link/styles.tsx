import { ExampleSection } from '#examples/-helpers';
import { Link } from '@admiral-ds/react-ui';

export const LinkStyles = () => {
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
