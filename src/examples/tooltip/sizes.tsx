import { ExampleSection } from '#examples/-helpers';
import { ButtonWithTooltip } from '#examples/-helpers/tooltip';

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
