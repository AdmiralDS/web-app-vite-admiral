import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { Tag, Tags } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagTooltip = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <Tags>
        <Tag width={150} onClick={clickHandler}>
          Если текст длинее ширины тэга, добавляется тултип
        </Tag>
        <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
      </Tags>
    </ExampleSection>
  );
};
