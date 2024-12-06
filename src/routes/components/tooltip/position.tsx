import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ButtonWithTooltip } from '../../-helpers/tooltip';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Снизу">
        <ButtonWithTooltip tooltipPosition="bottom" />
      </ExampleSection>
      <ExampleSection text="Слева">
        <ButtonWithTooltip tooltipPosition="left" />
      </ExampleSection>
      <ExampleSection text="Справа">
        <ButtonWithTooltip tooltipPosition="right" />
      </ExampleSection>
      <ExampleSection text="Сверху">
        <ButtonWithTooltip tooltipPosition="top" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tooltip/position')({
  component: () => <Template />,
  staticData: {
    title: 'Tooltip. Позиционирование',
    description: 'Приоритетным является расположение тултипа снизу объекта.',
  },
});

/*
Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.
*/
