import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME, IconButton, TooltipHoc } from '@admiral-ds/react-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
import CopyOutline from '@admiral-ds/icons/build/documents/CopyOutline.svg?react';
import SentOutline from '@admiral-ds/icons/build/service/SentOutline.svg?react';

import { light } from './prismThemes/light';
import { dark } from './prismThemes/dark';

const SyntaxHighlighterWrapper = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 16px;
    right: 12px;
  }
`;

const ButtonWithTooltip = TooltipHoc(IconButton);

type CodeBlockProps = {
  language: string;
  children: string;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  const theme = useTheme() || LIGHT_THEME;
  const themeStyle = theme.name == 'light' ? light : dark;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy code: ', err));
  };

  return (
    <SyntaxHighlighterWrapper>
      <SyntaxHighlighter language={language} style={themeStyle}>
        {children}
      </SyntaxHighlighter>
      <ButtonWithTooltip
        dimension="s"
        renderContent={() => (copied ? 'Code copied' : 'Copy code')}
        onClick={copyToClipboard}
      >
        {copied ? <SentOutline /> : <CopyOutline />}
      </ButtonWithTooltip>
    </SyntaxHighlighterWrapper>
  );
};
