import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked');
};

export const ButtonLoader = () => {
  return (
    <>
      <ExampleSection text="Loading">
        <Button dimension="xl" appearance="primary" loading onClick={handleClick}>
          Loading
        </Button>
      </ExampleSection>
      <ExampleSection text="Disable">
        <Button dimension="xl" disabled onClick={handleClick}>
          Disabled
        </Button>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/button/state')({
  component: () => <ButtonLoader />,
  staticData: {
    title: 'Состояния',
    description:
      'Кнопки в таких состояниях не активны, не реагируют на нажатие и при наведении отображают соответствующий курсор',
  },
});
