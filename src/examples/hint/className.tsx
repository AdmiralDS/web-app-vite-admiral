import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const Template = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ExampleSection>
      <Hint
        className="custom-hint-class"
        renderContent={() => text}
        anchorId="hint-class1"
        visibilityTrigger="click"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint-class1"
        />
      </Hint>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/hint/className')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. ClassName',
    description: '',
  },
});
