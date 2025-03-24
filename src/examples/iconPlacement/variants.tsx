import { ExampleSection } from '#examples/-helpers';
import { CloseIconPlacementButton } from '@admiral-ds/react-ui';

export const IconPlacementVariants = () => {
  return (
    <ExampleSection
      text={
        <>
          Примеры использования:
          <li>иконка Close в компонентах Modal, Toast, Hint</li>
          <li>иконка Chevrone в компоненте Select Tree, Calendar</li>
          <li>компонент Overflow Menu построен по такой же схеме</li>
        </>
      }
    >
      <CloseIconPlacementButton />
    </ExampleSection>
  );
};
