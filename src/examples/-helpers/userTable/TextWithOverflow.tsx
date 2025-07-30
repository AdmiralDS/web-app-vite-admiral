import type { ColorName, FontName, ITooltipProps } from '@admiral-ds/react-ui';
import { T, TooltipHoc } from '@admiral-ds/react-ui';
import { type FC, useCallback, useLayoutEffect, useRef, useState } from 'react';

import type { css, CSSProperties } from 'styled-components';
import styled from 'styled-components';

const Text = styled(T)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TooltipedText = TooltipHoc(Text);

type Props = {
  /**  Имя шрифта из списка дизайн системы */
  font?: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
  /** Состояние skeleton */
  skeleton?: boolean;
  /** Расположение тултипа */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
  /** Класс для стилизации */
  className?: string;
  style?: CSSProperties;
  children: any;
};

export const TextWithOverflowPopup: FC<Props> = ({ tooltipPosition, className, style, ...props }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (textRef.current) {
      const parentWidth = textRef.current.parentElement?.clientWidth;
      if (parentWidth) {
        setIsOverflowing(textRef.current.scrollWidth > parentWidth);
      } else {
        setIsOverflowing(false);
      }
    }
  }, []);

  useLayoutEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [checkOverflow, props.children, props.font, props.cssMixin, props.skeleton]);

  return (
    <Container className={className} style={style}>
      {isOverflowing ? (
        <TooltipedText renderContent={() => props.children} ref={textRef} tooltipPosition={tooltipPosition} {...props}>
          {props.children}
        </TooltipedText>
      ) : (
        <Text ref={textRef} {...props}>
          {props.children}
        </Text>
      )}
    </Container>
  );
};
