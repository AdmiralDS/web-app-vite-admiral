import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const bigText = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights. At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const Template = () => {
  const [visible1, setVisible1] = useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);

  const [visible2, setVisible2] = useState(false);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);

  const [visible3, setVisible3] = useState(false);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);

  const [visible4, setVisible4] = useState(false);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  const [visible5, setVisible5] = useState(false);
  const handleVisibilityChange5 = (visible: boolean) => setVisible5(visible);

  return (
    <>
      <ExampleSection text="Размер L">
        <Hint
          dimension="l"
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
      <ExampleSection text="Размер M">
        <Hint
          dimension="m"
          renderContent={() => text}
          anchorId="hint_base"
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
        >
          <Button
            dimension="m"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <Hint
          dimension="s"
          renderContent={() => text}
          anchorId="hint_base"
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
        >
          <Button
            dimension="s"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="Произвольная ширина">
        <Hint
          style={{ width: '300px' }}
          renderContent={() => text}
          anchorId="hint_base"
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
        >
          <Button
            dimension="s"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="Высота">
        <Hint
          dimension="s"
          renderContent={() => bigText}
          anchorId="hint_base"
          visible={visible5}
          onVisibilityChange={handleVisibilityChange5}
        >
          <Button
            dimension="s"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/hint/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. Размеры',
    description:
      'Для удобства компонент имеет три фиксированных по ширине размера: 280px, 384px и 488px. Которые используются в зависимости от предполагаемого объема текста. Вы также можете задавать свою ширину вручную, в случаях, когда это необходимо. Высота компонента устанавливается автоматически при редактировании. На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства. Высота компонента настраивается автоматически при задании контента. Максимальная высота компонента – 320px, после чего у контента появляется вертикальный скролл.',
  },
});
