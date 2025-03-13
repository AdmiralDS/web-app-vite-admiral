import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection, SectionDescription } from '#routes/-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Description = () => {
  return (
    <>
      <SectionDescription
        header={'Настройки компонента'}
        text={
          <>
            <li>Тип — горизонтальный или вертикальный</li>
            <li>Стиль — default, subtle, strong, primary, static white</li>
            <li>Толщина линии — 1 px, 2 px</li>
            <li>Тема — светлая или темная</li>
            <li>Вы можете назначать произвольные цвета компоненту, помимо заданных</li>
            <li>Размер компонента регулируется «вручную» пользователем</li>
          </>
        }
      ></SectionDescription>
      <SectionDescription
        header={'Рекомендации'}
        text={
          <>
            <li>
              Используйте Divider, только когда это необходимо. В большинстве ситуаций можно обойтись пустым
              пространством (отступами) и цветами.
            </li>
            <li>Не используйте компонент для создания обводок и других аналогичных элементов.</li>
            <li>
              При использовании между несколькими одинаковыми элементами интерфейса, разделители ставятся только между
              ними. Не ставьте разделители перед первым элементом и после последнего.
            </li>
          </>
        }
      ></SectionDescription>
      <Separator height={32} />
      Ширина компонента задается пользователем. Высота формируется контентом.
      <Separator height={16} />
      Компонент не используется на мобильных устройствах
    </>
  );
};

export const DividerBasic = () => {
  return (
    <ExampleSection text={<Description />}>
      <Divider />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/divider/')({
  component: () => <DividerBasic />,
  staticData: {
    title: 'Divider. Базовый пример',
    description:
      'Компонент для визуального разделения групп контента, создания визуальной иерархии или упорядочивания длинного списка элементов.',
  },
});
