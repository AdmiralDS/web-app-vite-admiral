import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { Tag } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const Template = () => {
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

export const Route = createFileRoute('/components/tag/')({
  component: () => <Template />,
  staticData: {
    title: 'Tag. Базовый пример',
    description:
      'Тэг — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг загружаются все элементы имеющие эту метку (опционально).',
  },
});
