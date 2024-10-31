import styled from 'styled-components';
import { Badge } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
`;

export const BadgeBasic = () => {
  return (
    <>
      <Layout>
        <Badge>4</Badge>
      </Layout>
    </>
  );
};
