import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { IconPlacement } from '@admiral-ds/react-ui';
import CloseOutline from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

export const Template = () => {
  return (
    <ExampleSection>
      <IconPlacement>
        <CloseOutline />
      </IconPlacement>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/iconPlacement/')({
  component: () => <Template />,
  staticData: {
    title: 'IconPlacement. Базовый пример',
    description:
      'Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов. По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable.',
  },
});
