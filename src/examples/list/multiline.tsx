import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { ListItem, UnorderedList } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <ExampleSection>
      <UnorderedList style={{ maxWidth: '500px' }}>
        <ListItem>First, let's set up your Segment Unify space. We'll take you to Segment to do this.</ListItem>
        <ListItem>
          The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when
          automatically finding profiles.
        </ListItem>
        <ListItem>
          Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want
          to make available to Flex agents and give them display names.
        </ListItem>
      </UnorderedList>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/list/multiline')({
  component: () => <Template />,
  staticData: {
    title: 'List. Многострочность и регулировка ширины списка',
    description:
      'Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По умолчанию компонент подстраивается под размеры родительского элемента.',
  },
});
