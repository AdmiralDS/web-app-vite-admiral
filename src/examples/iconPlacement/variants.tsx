import { ExampleSection } from '#examples/-helpers';
import { CloseIconPlacementButton, UnorderedList, ListItem } from '@admiral-ds/react-ui';

export const IconPlacementVariants = () => {
  return (
    <ExampleSection
      text={
        <>
          Примеры использования:
          <UnorderedList dimension="s" style={{ marginTop: '8px' }}>
            <ListItem>иконка Close в компонентах Modal, Toast, Hint</ListItem>
            <ListItem>иконка Chevrone в компоненте Select Tree, Calendar</ListItem>
            <ListItem>компонент Overflow Menu построен по такой же схеме</ListItem>
          </UnorderedList>
        </>
      }
    >
      <CloseIconPlacementButton />
    </ExampleSection>
  );
};
