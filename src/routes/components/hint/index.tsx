import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const Template = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ExampleSection>
      <Hint
        renderContent={() => text}
        anchorId="hint_base"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
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
  );
};

export const Route = createFileRoute('/components/hint/')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. Базовый пример',
    description:
      'Всплывающая подсказка используется для ситуаций, когда требуется пояснить или раскрыть информацию более детально. Вызывается, когда недостаточно Tooltip-а. В отличие от других компонентов обмена сообщениями, всплывающие окна никогда не должны содержать критическую информацию (например, ошибки).',
  },
});