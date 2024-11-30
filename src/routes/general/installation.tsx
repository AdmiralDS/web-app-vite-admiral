import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {CopyToClipboard} from 'react-copy-to-clipboard';

const Component = () => {
  const codeString = 'function test(){console.log("kate")}';
  const theme = useTheme() || LIGHT_THEME;
  return (
    <SyntaxHighlighter language="javascript" style={theme.name == 'light' ? oneLight : oneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export const Route = createFileRoute('/general/installation')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Component />
    </>
  );
}
