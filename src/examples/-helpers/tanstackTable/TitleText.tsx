import { checkOverflow, Tooltip } from '@admiral-ds/react-ui';
import * as React from 'react';
import { Title } from './styled';

type TitleTextProps = {
  title: React.ReactNode;
};

export const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  // const titleNotCustom = typeof title === 'string' || typeof title === 'number';
  // const withTooltip = overflow && tooltipVisible && titleNotCustom;
  const withTooltip = overflow && tooltipVisible;

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  React.useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const text = textRef.current;
    if (text) {
      text.addEventListener('mouseenter', show);
      text.addEventListener('mouseleave', hide);
      return () => {
        text.removeEventListener('mouseenter', show);
        text.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTooltipVisible, tooltipVisible]);

  return (
    <>
      <Title ref={textRef} data-title>
        {title}
      </Title>
      {withTooltip && <Tooltip targetElement={textRef.current} renderContent={() => title} />}
    </>
  );
};
