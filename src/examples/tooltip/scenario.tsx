import { useEffect, useRef, useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, Tooltip, TOOLTIP_DELAY } from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import { ButtonWithTooltip } from '#examples/-helpers/tooltip';

export const TooltipScenario = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    function show() {
      setTimer(setTimeout(() => setVisible(true), TOOLTIP_DELAY));
    }
    function hide() {
      clearTimeout(timer);
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
        if (timer) clearTimeout(timer);
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <>
      <ExampleSection text="Мгновенное появление">
        <ButtonWithTooltip />
      </ExampleSection>
      <ExampleSection text="Появление с задержкой в 1.5 секунды (опционально)">
        <Button ref={btnRef} displayAsSquare aria-label="Delete">
          <DeleteOutline aria-hidden />
        </Button>
        {visible && <Tooltip targetElement={btnRef.current} renderContent={() => `Tooltip`} id="test2" />}
      </ExampleSection>
    </>
  );
};

/*
Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.
*/
