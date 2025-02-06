import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import { ExampleSection } from '../../-helpers/examples';
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
`;

const AnchorItems = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
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
    title: 'Part 4',
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

export const Template = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  return (
    <>
      <ExampleSection text="Размер S">
        <Wrapper>
          <Content ref={containerRef}>
            <ContentItem id="part-1" style={{ background: 'rgb(255,220,220)' }} />
            <ContentItem id="part-2" style={{ background: 'rgb(220,255,220)' }} />
            <ContentItem id="part-3" style={{ background: 'rgb(220,220,255)' }} />
          </Content>

          <StyledAnchor dimension="s" getAnchorContainer={() => containerRef.current || window} items={AnchorItems} />
        </Wrapper>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Wrapper>
          <Content ref={containerRef2}>
            <ContentItem id="part-4" style={{ background: 'rgb(255,220,220)' }} />
            <ContentItem id="part-5" style={{ background: 'rgb(220,255,220)' }} />
            <ContentItem id="part-6" style={{ background: 'rgb(220,220,255)' }} />
          </Content>

          <StyledAnchor dimension="m" getAnchorContainer={() => containerRef2.current || window} items={AnchorItems2} />
        </Wrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/anchor/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'Anchor. Размеры',
    description: 'Компонент представлен в 2 размерах 24px (s) и 28px (m)',
  },
});
