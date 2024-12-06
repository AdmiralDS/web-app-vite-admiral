import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ButtonWithTooltip } from '../../-helpers/tooltip';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <ButtonWithTooltip dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <ButtonWithTooltip dimension="s" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tooltip/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'Tooltip. Размеры',
    description:
      'Существует в двух размерах: S 20px и M 24px по высоте. Рекомендуется максимальная ширина 488px. При большем объеме используйте компонент Hint.',
  },
});
