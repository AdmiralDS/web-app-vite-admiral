import { useEffect, useRef, useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, Tooltip } from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export const TooltipRef = () => {
  const tooltipRef = useRef(null);
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
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test3">
        <DeleteOutline height={24} width={24} />
      </Button>
      {visible && (
        <Tooltip targetElement={btnRef.current} renderContent={() => 'Delete file'} ref={tooltipRef} id="test3" />
      )}
    </ExampleSection>
  );
};
