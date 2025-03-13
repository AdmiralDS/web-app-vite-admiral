import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Tooltip } from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export const Template = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <ExampleSection>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete">
        <DeleteOutline aria-hidden />
      </Button>
      {visible && <Tooltip targetElement={btnRef.current} renderContent={() => `Tooltip`} />}
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/tooltip/')({
  component: () => <Template />,
  staticData: {
    title: 'Tooltip. Базовый пример',
    description:
      'Компонент, отвечающий за подсказки, детализацию информации или пояснения. Tooltip можно «привязать» к любому компоненту, которому требуется подсказка, если это не конфликтует с уже существующими функциями компонента.',
  },
});
