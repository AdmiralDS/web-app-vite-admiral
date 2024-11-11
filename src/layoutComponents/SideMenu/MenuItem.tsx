import styled, { css } from 'styled-components';
import type { HTMLAttributes, ReactNode, FC } from 'react';
import React, { useState, useCallback, useRef, useLayoutEffect } from 'react';
import { typography, OpenStatusButton } from '@admiral-ds/react-ui';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Transition } from './Transition';

const Item = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 0;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  padding: 10px 12px 10px 8px;
  margin-top: 8px;
  &:is(.example) {
    padding: 10px 12px 10px 28px;
  }
  margin-top: 8px;
  border-left: 4px solid transparent;
  border-radius: 4px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${typography['Body/Body 2 Long']}
  text-decoration: none;

  &:hover {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &[data-selected='true'] {
    border-left-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    background: var(--admiral-color-Opacity_Focus, ${(p) => p.theme.color['Opacity/Focus']});
  }
`;

export const Collapse = styled.div<{ $opened?: boolean }>`
  overflow: hidden;
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Chevron = styled(OpenStatusButton)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin: 0 0 0 8px;
`;

export const ItemTitleContent = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
`;

export const TitleContent = styled.span`
  display: inline-flex;
  flex: 1 1 auto;
`;

const eventsMixin = css`
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  // нужен ли?
  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      top: -1px;
      left: 0;
      bottom: -1px;
      right: 0;
    }
  }
  &:focus,
  & > ${ItemTitleContent} {
    outline: none;
  }
`;

export const ItemTitle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  width: 100%;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  border: none;
  border-radius: 4px;
  background: none;
  margin: 8px 0 0 0;
  padding: 0;
  overflow: visible;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  text-decoration: none;
  ${typography['Body/Body 2 Long']}
  &:is(.topLevel) {
    ${typography['Subtitle/Subtitle 3']}
  }

  &:not(:disabled) {
    ${eventsMixin}
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const ItemContent = styled.div`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'title'> {
  /** Заголовок компонента */
  title: ReactNode;
  /** Отключение компонента */
  disabled?: boolean;
  /** Pathname компонента */
  to: string;
}

export const ExpandedMenuItem: FC<AccordionItemProps> = ({ children, title, to, disabled, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  /** При mount меню должно быть открыто на активном пункте */
  const [expanded, setExpanded] = useState<boolean>(
    location.pathname.startsWith(to) || (location.pathname == '/' && to == '/general/resources'),
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setWrapperHeight(expanded ? 'auto' : '0px');
  }, []);

  const setWrapperHeight = (height?: string) => {
    // reading clientHeight will cause the browser to recalculate (reflow),
    // which will let animations work
    const contentHeight = (contentRef.current?.clientHeight || 0) + 'px';
    const wrapperHeight = height ?? contentHeight;

    if (wrapperRef.current) {
      wrapperRef.current.style.height = wrapperHeight;
    }
  };

  const handleTransitionEnter = () => {
    setWrapperHeight('0px');
  };
  const handleTransitionEntering = () => {
    setWrapperHeight();
  };
  const handleTransitionEntered = () => {
    setWrapperHeight('auto');
  };
  const handleTransitionExit = () => {
    setWrapperHeight();
  };
  const handleTransitionExiting = () => {
    setWrapperHeight('0px');
  };

  const handleClick = useCallback(() => {
    if (!expanded && props.className != 'topLevel') {
      navigate({ to });
    }
    setExpanded(!expanded);
  }, [expanded, props.className, to]);

  return (
    <>
      <ItemTitle
        onClick={handleClick}
        role="button"
        type="button"
        aria-expanded={expanded}
        disabled={disabled}
        {...props}
      >
        <ItemTitleContent tabIndex={-1}>
          <TitleContent>{title}</TitleContent>
          <Chevron aria-hidden appearance="primary" $isOpen={expanded} />
        </ItemTitleContent>
      </ItemTitle>
      <Transition
        in={expanded}
        timeout={250}
        onEnter={handleTransitionEnter}
        onEntered={handleTransitionEntered}
        onEntering={handleTransitionEntering}
        onExit={handleTransitionExit}
        onExiting={handleTransitionExiting}
      >
        <Collapse $opened={expanded} ref={wrapperRef}>
          <ItemContent ref={contentRef} role="region">
            {children}
          </ItemContent>
        </Collapse>
      </Transition>
    </>
  );
};

export const MenuItem: React.FC<{ to: string; title: ReactNode; className?: string }> = ({ title, to, className }) => {
  return (
    <Item to={to} activeOptions={{ exact: true }} activeProps={{ 'data-selected': `true` }} className={className}>
      {title}
    </Item>
  );
};
