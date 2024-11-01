import styled, { css } from 'styled-components';
import type { HTMLAttributes, ReactNode, MouseEvent, FC } from 'react';
import React, { useState, useCallback } from 'react';
import { typography, OpenStatusButton } from '@admiral-ds/react-ui';
import { Link, useNavigate } from '@tanstack/react-router';

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
  transition:
    max-height 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(p) => (!p.$opened ? 0 : '100vh')};
  visibility: ${(p) => (!p.$opened ? 'hidden' : 'visible')};
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
  overflow-y: auto;
  max-height: 100vh;
`;

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'title'> {
  /** Заголовок компонента */
  title: ReactNode;
  /** Дефолтное (изначальное) состояние компонента (раскрыт/свернут) при неконтролируемом режиме работы */
  defaultExpanded?: boolean;
  /** Колбек на клик по компоненту */
  onClick?: (title: ReactNode, expanded: boolean, event: MouseEvent<HTMLButtonElement>) => void;
  /** Отключение компонента */
  disabled?: boolean;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  children,
  title,
  defaultExpanded,
  onClick,
  disabled,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(title, !expanded, event);
      setExpanded(!expanded);
    },
    [expanded, onClick, title],
  );
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
      <Collapse $opened={expanded}>
        <ItemContent role="region">{children}</ItemContent>
      </Collapse>
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

export const ExpandedMenuItem: React.FC<{
  title: ReactNode;
  children: ReactNode;
  to?: string;
  className?: string;
  defaultExpanded?: boolean;
}> = ({ title, to, children, className, defaultExpanded = false }) => {
  const navigate = useNavigate();
  const handleClick = (_title: ReactNode, expanded: boolean) => {
    if (expanded) {
      navigate({ to });
    }
  };
  return (
    <AccordionItem
      title={title}
      className={className}
      defaultExpanded={defaultExpanded}
      onClick={to ? handleClick : undefined}
    >
      {children}
    </AccordionItem>
  );
};
