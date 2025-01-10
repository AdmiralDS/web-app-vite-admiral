import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { typography, Link } from '@admiral-ds/react-ui';

import { CodeBlock } from '../-helpers/general';

const Wrapper = styled.div`
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

const Section = styled.div`
  padding: 28px 0;
  color: 1px solid var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});

  & > pre {
    margin-top: 16px;
  }
`;

const Question = styled.div`
  ${typography['Subtitle/Subtitle 2']}
`;

const Answer = styled.div`
  margin-top: 8px;
  max-width: 720px;
  ${typography['Body/Body 2 Long']}
`;

const Divider = styled.div<{ $height: number }>`
  height: ${(p) => p.$height}px;
`;

function RouteComponent() {
  return (
    <Wrapper>
      <Section>
        <Question>Как поменять текстовые константы в компоненте?</Question>
        <Answer>
          Все текстовые константы можно настраивать через параметр locale в конкретном компоненте или через свойство
          locale темы для всех компонентов. Подробнее можно прочесть об этом в разделе&nbsp;
          <Link
            dimension="s"
            style={{ display: 'inline-flex' }}
            href="https://admiralds.github.io/react-ui/?path=/docs/locales--docs"
            target="_blank"
          >
            Locales
          </Link>
          &nbsp;в Storybook.
          <Divider $height={12} />
          Если вы обнаружили, что в каком-то компоненте есть текстовая константа, но параметр locale в компоненте
          отсутствует, пожалуйста, заведите нам задачу на&nbsp;
          <Link
            dimension="s"
            style={{ display: 'inline-flex' }}
            href="https://github.com/AdmiralDS/react-ui/issues"
            target="_blank"
          >
            Github
          </Link>
          .
        </Answer>
      </Section>
      <Section>
        <Question>Как изменить цвет иконки?</Question>
        <Divider $height={16} />
        <CodeBlock language="typescript">{code}</CodeBlock>
      </Section>
    </Wrapper>
  );
}

const code = `import PinSolid from '@admiral-ds/icons/build/category/PinSolid.svg?react';
import styled from 'styled-components';

export const ColoredPin = styled(PinSolid)\`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  }
\`;`;

export const Route = createFileRoute('/general/faqs')({
  component: RouteComponent,
  staticData: {
    title: 'FAQs',
  },
});
