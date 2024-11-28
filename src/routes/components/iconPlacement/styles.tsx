import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { IconPlacement } from '@admiral-ds/react-ui';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const Template = () => {
  return (
    <>
      <ExampleSection text="Primary">
        <IconPlacement onClick={handleClick} appearance={'primary'}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Secondary">
        <IconPlacement onClick={handleClick} appearance={'secondary'}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
      <ExampleSection text="Custom icon color">
        <IconPlacement onClick={handleClick} appearance={{ iconColor: '#E052BD' }}>
          <CloseOutline />
        </IconPlacement>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/iconPlacement/styles')({
  component: () => <Template />,
  staticData: {
    title: 'IconPlacement. Стили',
    description: 'Два типа — Primary и Secondary. Можно окрашивать в произвольные цвета, например Error или Success.',
  },
});
