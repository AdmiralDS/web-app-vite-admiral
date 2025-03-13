import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { css } from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const anchorCss = css`
  padding: 10px;
  border: 2px dotted red;
`;

export const Template = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ExampleSection>
      <Hint
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
        renderContent={() => text}
        anchorId="hint_css"
        anchorCssMixin={anchorCss}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_css"
        />
      </Hint>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/hint/anchorCssMixin')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin',
    description: '',
  },
});
