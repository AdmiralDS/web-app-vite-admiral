import { useRef } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import styled from 'styled-components';
import { Anchor } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
`;

const ContentItem = styled.div`
  flex: 1 0 500px;
`;

const StyledAnchor = styled(Anchor)`
  flex: 0 1 20%;
  width: 20%;
`;

const AnchorItems = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1Part 1Part 1Part 1Part 1Part 1Part 1Part 1Part 1Part 1Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

const AnchorItems2 = [
  {
    key: 'part-4',
    href: '#part-4',
    title: 'Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part 4Part',
  },
  {
    key: 'part-5',
    href: '#part-5',
    title: 'Part 5',
  },
  {
    key: 'part-6',
    href: '#part-6',
    title: 'Part 6',
  },
];

const AnchorItems3 = [
  {
    key: 'part-7',
    href: '#part-7',
    title: 'Part 7Part 7Part 7Part 7Part 7Part 7Part 7Part 7Part 7',
  },
  {
    key: 'part-8',
    href: '#part-8',
    title: 'Part 8',
  },
  {
    key: 'part-9',
    href: '#part-9',
    title: 'Part 9',
  },
];

export const AnchorState = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  return (
    <>
      <ExampleSection text="multilineView">
        <Wrapper>
          <Content ref={containerRef}>
            <ContentItem id="part-1" style={{ background: 'rgb(255,220,220)' }} />
            <ContentItem id="part-2" style={{ background: 'rgb(220,255,220)' }} />
            <ContentItem id="part-3" style={{ background: 'rgb(220,220,255)' }} />
          </Content>

          <StyledAnchor multilineView getAnchorContainer={() => containerRef.current || window} items={AnchorItems} />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="offsetTop={200} Сдвиг сверху при расчете положения прокрутки, в пикселях">
        <Wrapper>
          <Content ref={containerRef2}>
            <ContentItem id="part-4" style={{ background: 'rgb(255,220,220)' }} />
            <ContentItem id="part-5" style={{ background: 'rgb(220,255,220)' }} />
            <ContentItem id="part-6" style={{ background: 'rgb(220,220,255)' }} />
          </Content>

          <StyledAnchor
            offsetTop={200}
            getAnchorContainer={() => containerRef2.current || window}
            items={AnchorItems2}
          />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="bounds={200} Границы зоны якоря, в пикселях">
        <Wrapper>
          <Content ref={containerRef3}>
            <ContentItem id="part-7" style={{ background: 'rgb(255,220,220)' }} />
            <ContentItem id="part-8" style={{ background: 'rgb(220,255,220)' }} />
            <ContentItem id="part-9" style={{ background: 'rgb(220,220,255)' }} />
          </Content>

          <StyledAnchor bounds={200} getAnchorContainer={() => containerRef3.current || window} items={AnchorItems3} />
        </Wrapper>
      </ExampleSection>
    </>
  );
};
