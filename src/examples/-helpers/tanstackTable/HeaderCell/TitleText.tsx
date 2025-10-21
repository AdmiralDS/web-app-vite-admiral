import { useLayoutEffect, useRef, useState } from 'react';

import { checkOverflow, Tooltip } from '@admiral-ds/react-ui';
import { ExtraText, Title } from './styled';
import type { Dimension } from '../Table';

type TitleTextProps = {
  lineClamp: number;
  title: React.ReactNode;
  dimension?: Dimension;
  extraText?: boolean;
};

export const TitleText: React.FC<TitleTextProps> = ({ lineClamp, dimension, extraText, title }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const titleNotCustom = typeof title === 'string' || typeof title === 'number';
  const withTooltip = overflow && tooltipVisible && titleNotCustom;

  useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  useLayoutEffect(() => {
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
  }, [setTooltipVisible]);

  return (
    <>
      {extraText ? (
        <ExtraText ref={textRef} $dimension={dimension || 'm'} $lineClamp={lineClamp}>
          {title}
        </ExtraText>
      ) : (
        <Title ref={textRef} $lineClamp={lineClamp} data-title>
          {title}
        </Title>
      )}
      {withTooltip && <Tooltip targetElement={textRef.current} renderContent={() => title} />}
    </>
  );
};
