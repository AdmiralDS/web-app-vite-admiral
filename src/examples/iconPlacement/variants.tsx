import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { CloseIconPlacementButton } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/iconPlacement/variants')({
  component: () => <Template />,
  staticData: {
    title: 'IconPlacement. Варианты использования',
    description:
      'Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство внутри компонентов.',
  },
});
