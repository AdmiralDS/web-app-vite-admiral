import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const Template = () => {
  const [visible1, setVisible1] = useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);

  const [visible2, setVisible2] = useState(false);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleButtonClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (visible2) {
      setVisible2(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <>
      <ExampleSection
        header="Появление по hover"
        text="В сценарии, когда Hint вызывается по ховеру, иконки закрытия на компоненте нет и он скрывается, когда мы уводим курсор с объекта к которому он привязан."
      >
        <Hint
          renderContent={() => text}
          anchorId="hint_base"
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection
        header="Появление по клику"
        text="В случае, когда Hint вызывается по клику, у нас есть возможность его закрыть кликом вне Hint-а либо нажатием на крестик."
      >
        <Hint
          renderContent={() => text}
          anchorId="hint_click"
          visibilityTrigger="click"
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_click"
            onClick={handleButtonClick2}
          />
        </Hint>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/hint/scenario')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. Сценарии появления',
    description:
      'Помимо показа по ховеру и клику, компоненту можно присваивать показ по любому событию на странице, определяется пользователем.',
  },
});
