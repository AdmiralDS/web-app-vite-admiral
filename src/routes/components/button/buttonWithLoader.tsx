import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked');
};

export const ButtonLoader = () => {
  return (
    <ExampleSection>
      <Wrapper>
        <Button dimension="xl" appearance="primary" loading onClick={handleClick}>
          Loading
        </Button>
        <Button dimension="xl" disabled onClick={handleClick}>
          Disabled
        </Button>
      </Wrapper>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/button/buttonWithLoader')({
  component: () => <ButtonLoader />,
  staticData: {
    title: 'Состояния Loading и Disable',
    description:
      'Кнопки в таких состояниях не активны, не реагируют на нажатие и при наведении отображают соответствующий курсор',
  },
});
