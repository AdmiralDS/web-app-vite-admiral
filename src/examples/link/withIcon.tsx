import styled from 'styled-components';
import { ExampleSection, rowFlexMixin } from '#examples/-helpers';
import { Link } from '@admiral-ds/react-ui';
import ArrowLeftOutline from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg?react';
import ArrowRightOutline from '@admiral-ds/icons/build/system/ArrowRightOutline.svg?react';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkWithIcon = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <Link appearance="primary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Divider />
        Link
      </Link>
      <Link
        appearance="secondary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
        <Divider />
        <ArrowRightOutline width={20} />
      </Link>
    </ExampleSection>
  );
};
