import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Avatar } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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

export const Route = createFileRoute('/components/avatar/sizeXXS')({
  component: () => <AvatarXXS />,
  staticData: {
    title: 'Avatar. Размер XXS',
    description:
      'Не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других компонентов с размерным рядом элементов 20px. Имеет только два типа: с инициалами или с фото.',
  },
});
