import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';
import { Button, Hint } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const rowFlexMixin = css`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const StyledButton = styled(Button)`
  padding: 4px;
`;

export const Template = () => {
  const [visible1, setVisible1] = useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);

  const [visible2, setVisible2] = useState(false);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);

  const [visible3, setVisible3] = useState(false);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);

  const [visible4, setVisible4] = useState(false);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Right">
        <Hint
          dimension="s"
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="right_pos"
          hintPosition="right"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="right_pos">
            Right
          </StyledButton>
        </Hint>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Top">
        <Hint
          dimension="s"
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          id="top_pos"
          hintPosition="top"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="top_pos">
            Top
          </StyledButton>
        </Hint>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Bottom">
        <Hint
          dimension="s"
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="bottom_pos"
          hintPosition="bottom"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="bottom_pos">
            Bottom
          </StyledButton>
        </Hint>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Left">
        <Hint
          dimension="s"
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          id="left-pos"
          hintPosition="left"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="left-pos">
            Left
          </StyledButton>
        </Hint>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Позиционирование относительно targetElement">
        <Button
          ref={btnRef}
          dimension="xl"
          appearance="primary"
          iconEnd={
            <Hint
              visible={visible}
              onVisibilityChange={handleVisibilityChange}
              renderContent={() => text}
              targetElement={btnRef.current}
              anchorId="hint_target"
            >
              <HelpOutline tabIndex={0} height={24} width={24} aria-label="Help Icon" aria-describedby="hint_target" />
            </Hint>
          }
        >
          Hover on icon
        </Button>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/hint/position')({
  component: () => <Template />,
  staticData: {
    title: 'Hint. Позиционирование',
    description: '',
  },
});
