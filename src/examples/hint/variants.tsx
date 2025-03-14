import { useState } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { Button, Hint, T, TextButton } from '@admiral-ds/react-ui';
import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg?react';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const renderHintContentWithHeader = () => {
  return (
    <div>
      <T font="Subtitle/Subtitle 3" as="div" style={{ marginBottom: '4px' }}>
        Hint header
      </T>
      {text}
    </div>
  );
};

export const HintVariants = () => {
  const [visible1, setVisible1] = useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);

  const [visible2, setVisible2] = useState(false);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);

  const [visible3, setVisible3] = useState(false);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);

  const [visible4, setVisible4] = useState(false);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <>
      <ExampleSection text="С заголовком">
        <Hint
          renderContent={renderHintContentWithHeader}
          anchorId="hint_click"
          visibilityTrigger="click"
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_click"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="С кнопкой">
        <Hint
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          visibilityTrigger="click"
          renderContent={() => (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {text}
              <Separator height={4} />
              <TextButton appearance="primary" dimension="s" text="Text Button" />
            </div>
          )}
          anchorId="hint_textbutton"
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_textbutton"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="С двумя кнопками">
        <Hint
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          visibilityTrigger="click"
          renderContent={() => (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {text}
              <Separator height={4} />
              <div style={{ display: 'flex', gap: '16px' }}>
                <TextButton appearance="primary" dimension="s" text="Text Button" />
                <TextButton appearance="primary" dimension="s" text="Text Button" />
              </div>
            </div>
          )}
          anchorId="hint_textbutton"
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_textbutton"
          />
        </Hint>
      </ExampleSection>
      <ExampleSection text="При использовании информера без иконки закрытия (то есть того, который вызывается по ховеру), информер закрывается, если увести курсор выше, влево или вправо от объекта. Если же курсор уводится вниз на область информера и область в 8px вокруг него, то информер остается видимым и можно, например, скопировать текст из него.">
        <Hint
          renderContent={() => text}
          anchorId="hint_base"
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
        >
          <Button
            dimension="xl"
            appearance="primary"
            displayAsSquare
            iconStart={<HelpOutline aria-hidden />}
            aria-label="Additional information"
            aria-describedby="hint_base"
          />
        </Hint>
      </ExampleSection>
    </>
  );
};
