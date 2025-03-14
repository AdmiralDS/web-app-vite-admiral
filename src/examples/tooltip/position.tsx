import { ExampleSection } from '#routes/-helpers/examples';
import { ButtonWithTooltip } from '#routes/-helpers/tooltip';

export const TooltipPosition = () => {
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

/*
Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.
*/
