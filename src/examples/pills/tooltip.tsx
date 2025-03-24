import { ExampleSection } from '#examples/-helpers';
import { checkOverflow, Pill, Tooltip, TooltipHoc } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { useLayoutEffect, useRef, useState } from 'react';

const StyledPill = styled(Pill)`
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  width: fit-content;
`;

const StyledPillWithTooltipHoc = TooltipHoc(StyledPill);

const LabelWrapper = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PillsTooltip = () => {
  const pillLabel = 'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны';

  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

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
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      wrapper.addEventListener('focus', show);
      wrapper.addEventListener('blur', hide);
      return () => {
        wrapper.removeEventListener('mouseenter', show);
        wrapper.removeEventListener('mouseleave', hide);
        wrapper.removeEventListener('focus', show);
        wrapper.removeEventListener('blur', hide);
      };
    }
  }, [setTooltipVisible]);

  return (
    <>
      <ExampleSection text="Вариант Pill ограниченной ширины с использованием Tooltip при переполнении.">
        <StyledPill ref={wrapperRef} style={{ width: '253px' }}>
          <LabelWrapper ref={textRef}>{pillLabel}</LabelWrapper>
        </StyledPill>
        {tooltipVisible && overflow && <Tooltip targetElement={wrapperRef.current} renderContent={() => pillLabel} />}
      </ExampleSection>
      <ExampleSection text="Вариант Pill с ограничением по количеству символов и с использованием TooltipHoc.">
        <StyledPillWithTooltipHoc renderContent={() => pillLabel}>
          {pillLabel.slice(0, 40) + '...'}
        </StyledPillWithTooltipHoc>
      </ExampleSection>
    </>
  );
};
