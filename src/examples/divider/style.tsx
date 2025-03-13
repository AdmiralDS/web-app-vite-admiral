import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const SeparatorHorizontal = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const SeparatorVertical = styled.div<{ width: number }>`
  width: ${(p) => p.width}px;
`;

const WrapperVertical = styled.div`
  display: flex;
  margin-top: 16px;
`;

const ExampleSectionDark = styled(ExampleSection)`
  background-color: #181818;
`;

const DividerType = () => {
  return (
    <>
      <ExampleSection text={'Стиль default'}>
        <Divider dimension="s" />
        <SeparatorHorizontal height={16} />
        <Divider />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text={'Стиль subtle'}>
        <Divider dimension="s" appearance="subtle" />
        <SeparatorHorizontal height={16} />
        <Divider appearance="subtle" />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" appearance="subtle" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" appearance="subtle" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text={'Стиль strong'}>
        <Divider dimension="s" appearance="strong" />
        <SeparatorHorizontal height={16} />
        <Divider appearance="strong" />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" appearance="strong" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" appearance="strong" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSection text={'Стиль primary'}>
        <Divider dimension="s" appearance="primary" />
        <SeparatorHorizontal height={16} />
        <Divider appearance="primary" />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" appearance="primary" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" appearance="primary" />
        </WrapperVertical>
      </ExampleSection>
      <ExampleSectionDark text={'Стиль staticWhite'}>
        <Divider dimension="s" appearance="staticWhite" />
        <SeparatorHorizontal height={16} />
        <Divider appearance="staticWhite" />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" appearance="staticWhite" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" appearance="staticWhite" />
        </WrapperVertical>
      </ExampleSectionDark>
      <ExampleSection text={'Стиль custom'}>
        <Divider dimension="s" appearance="#84106e" />
        <SeparatorHorizontal height={16} />
        <Divider appearance="#84106e" />
        <WrapperVertical>
          <Divider orientation="vertical" length="150px" appearance="#84106e" />
          <SeparatorVertical width={16} />
          <Divider dimension="s" orientation="vertical" length="150px" appearance="#84106e" />
        </WrapperVertical>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/divider/style')({
  component: () => <DividerType />,
  staticData: {
    title: 'Divider. Стиль (appearance)',
  },
});
