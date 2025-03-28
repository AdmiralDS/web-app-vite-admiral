import { ExampleSection } from '#examples/-helpers';
import { GlobalSearchWithLogic } from '#examples/-helpers/globalSearch';

export const GlobalSearchSizes = () => {
  return (
    <>
      <ExampleSection text="Размер XL (56px)">
        <GlobalSearchWithLogic dimension="xl" />
      </ExampleSection>
      <ExampleSection text="Размер M (40px)">
        <GlobalSearchWithLogic dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер S (32px)">
        <GlobalSearchWithLogic dimension="s" />
      </ExampleSection>
    </>
  );
};
