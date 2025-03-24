import styled from 'styled-components';
import { Avatar } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const AvatarXXS = () => {
  return (
    <ExampleSection>
      <Container>
        <Avatar userName={'Just Example'} dimension="xxs" />
        <Avatar userName={'Just Example'} href={imageURL} dimension="xxs" />
      </Container>
    </ExampleSection>
  );
};
