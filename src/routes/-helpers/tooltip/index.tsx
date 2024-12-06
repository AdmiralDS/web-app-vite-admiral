import React, { useEffect, useRef, useState } from 'react';
import { Button, ITooltipProps, Tooltip } from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export interface ButtonWithTooltipProps extends Omit<ITooltipProps, 'renderContent' | 'targetElement'>{
  buttonIcon?: React.ReactNode;
  renderContent?: () => React.ReactNode;
  targetElement?: Element | null;
}

export const ButtonWithTooltip = ({ dimension, tooltipPosition, buttonIcon, renderContent, targetElement, ...props }: ButtonWithTooltipProps) => {
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

  const renderContentDefault = () => `Tooltip`;

  return (
    <>
      <Button ref={btnRef} dimension={dimension} displayAsSquare aria-label="Delete" aria-describedby="test1">
        {buttonIcon ?? <DeleteOutline aria-hidden />}
      </Button>
      {visible && (
        <Tooltip
          {...props}
          dimension={dimension}
          targetElement={targetElement ?? btnRef.current}
          renderContent={renderContent ?? renderContentDefault}
          tooltipPosition={tooltipPosition}
          id="test1"
        />
      )}
    </>
  );
};
