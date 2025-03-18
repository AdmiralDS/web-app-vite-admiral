import { ExampleSection, rowFlexMixin } from '#examples/-helpers';
import { Tag } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagBasic = () => {
  return (
    <ExampleSection
      cssMixin={rowFlexMixin}
      text="Тэги могут быть как активными (active) и служить, например, каталагизаторами, так и пассивными (passive), просто отображая принадлежность элемента к некоторой группе элементов имеющих общий признак."
    >
      <Tag>Passive</Tag>
      <Tag onClick={clickHandler}>Active</Tag>
    </ExampleSection>
  );
};
