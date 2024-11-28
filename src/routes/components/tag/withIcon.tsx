import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, rowFlexMixin } from '../../-helpers/examples';
import { Tag, Tags } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const Template = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <Tags>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tag/withIcon')({
  component: () => <Template />,
  staticData: {
    title: 'Tag. С иконкой',
    description:
      'Тэги могут быть с иконками, но только в том случае, если статус отображается через цвет обводки и фона (параметр statusViaBackground установлен в true).',
  },
});
