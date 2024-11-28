import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Tag, Tags } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const handleClickDangerTag = () => console.log('click danger tag');

export const Template = () => {
  return (
    <ExampleSection>
      <Tags
        width={50}
        // eslint-disable-next-line no-console
        onClick={(event) => console.log(`click tag with id: ${event.currentTarget.id}`)}
      >
        <Tag id="1">Tag in group</Tag>
        <Tag id="2">Tag in group</Tag>
        <Tag id="3">Tag in group</Tag>
        <Tag id="4" kind="neutral">
          Neutral
        </Tag>
        <Tag id="5" kind="success">
          Success
        </Tag>
        <Tag id="6" kind="primary">
          Primary
        </Tag>
        <Tag id="7" kind="danger" width="auto" onClick={handleClickDangerTag}>
          Danger
        </Tag>
        <Tag id="8" kind="warning">
          Warning
        </Tag>
      </Tags>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tag/tags')({
  component: () => <Template />,
  staticData: {
    title: 'Tags. Группа тэгов',
    description:
      'Тэги можно использовать группами. Горизонтальные и вертикальные отступы между соседними тэгами равны 8px. Для каждого тэга можно отдельно задать width, kind и onClick, либо можно задать единые width, kind и onClick через Tags. Dimension задается единый для всех тэгов в группе.',
  },
});
