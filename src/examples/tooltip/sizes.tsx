import { ExampleSection } from '#routes/-helpers/examples';
import { ButtonWithTooltip } from '#routes/-helpers/tooltip';

export const TooltipSizes = () => {
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
