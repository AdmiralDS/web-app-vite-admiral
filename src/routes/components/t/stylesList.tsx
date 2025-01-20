import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { DefaultFontColorName, LIGHT_THEME, T, TooltipHoc, typography } from '@admiral-ds/react-ui';
import styled, { useTheme } from 'styled-components';
import { FONTS, NEW_FONTS } from '../../-helpers/t/storyDescriptions';
import { forwardRef } from 'react';

import CopyOutline from '@admiral-ds/icons/build/documents/CopyOutline.svg?react';

const FontDesc = styled.table`
  td {
    padding: 0;
    border-top: none;
    white-space: nowrap;
  }
  td:first-child {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    padding-right: 16px;
  }
`;

const Table = styled.table`
  ${typography['Body/Body 2 Long']}
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});

  th,
  td[data-label] {
    text-align: left;
    padding: 8px 60px 8px 8px;
    border-bottom: 1px solid var(--admiral-color-Neutral_Neutral70, ${(p) => p.theme.color['Neutral/Neutral 70']});
  }
  th {
    ${typography['Header/H3']}
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  td[data-label]:last-child {
    padding: 8px;
  }

  td[data-label='Manual'] {
    min-width: 300px;
    width: 300px;
  }
`;

const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const CopyIcon = forwardRef<HTMLDivElement, { text: string }>(({ text }, ref) => {
  const theme = useTheme() || LIGHT_THEME;

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <CopyOutlineWrapper ref={ref}>
      <CopyOutline
        width={16}
        height={16}
        onClick={copyToClipboard}
        fill={`var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`}
      />
    </CopyOutlineWrapper>
  );
});

const CopyButton = TooltipHoc(CopyIcon);

export const Template = () => {
  const theme = useTheme() || LIGHT_THEME;

  return (
    <>
      <ExampleSection>
        <Table>
          <thead>
            <tr>
              <th data-label="Style">Стиль</th>
              <th data-label="Props">Характеристики</th>
              <th data-label="Manual">Применение</th>
            </tr>
          </thead>
          <tbody>
            {NEW_FONTS.map((item, index: number) => {
              const text = `
            import { T, typography } from '@admiral-ds/react-ui';
            import styled from 'styled-components';

            const Paragraph = styled.p\`
              \${typography['${item.name}']}
              color: #2B313B;
            \`

            const Example = () => {
              return(
                <>
                  <T font='${item.name}'>Использование StyledComponent</T>
                  <Paragraph>Использование ThemedCssFunction</Paragraph>
                </>
              );
             }
            `;
              return (
                <tr key={index}>
                  <td data-label="Style">
                    <T font={item.name} as="div">
                      {item.name}
                    </T>
                    <CopyButton text={text} renderContent={() => 'Копировать пример использования'} />
                  </td>
                  <td data-label="Props">
                    <FontDesc>
                      <tbody>
                        <tr>
                          <td>Шрифт:</td>
                          <td>{theme.fontFamily}</td>
                        </tr>
                        {item.style.map((st, index: number) => (
                          <tr key={index}>
                            <td>{st.name}</td>
                            <td>{st.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </FontDesc>
                  </td>
                  <td data-label="Manual">{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ExampleSection>
      <ExampleSection header={<T font="Header/H3">Old version</T>}>
        <Table>
          <thead>
            <tr>
              <th data-label="Style">Стиль</th>
              <th data-label="Props">Характеристики</th>
              <th data-label="Manual">Применение</th>
            </tr>
          </thead>
          <tbody>
            {FONTS.map((item, index: number) => {
              const text = `
            import { T, typography } from '@admiral-ds/react-ui';
            import styled from 'styled-components';

            const Paragraph = styled.p\`
              \${typography['${item.name}']}
              color: #2B313B;
            \`

            const Example = () => {
              return(
                <>
                  <T font='${item.name}'>Использование StyledComponent</T>
                  <Paragraph>Использование ThemedCssFunction</Paragraph>
                </>
              );
             }
            `;
              return (
                <tr key={index}>
                  <td data-label="Style">
                    <T font={item.name} as="div">
                      {item.name}
                    </T>
                    <CopyButton text={text} renderContent={() => 'Копировать пример использования'} />
                  </td>
                  <td data-label="Props">
                    <FontDesc>
                      <tbody>
                        <tr>
                          <td>Шрифт:</td>
                          <td>{theme.fontFamily}</td>
                        </tr>
                        {item.style.map((st, index: number) => (
                          <tr key={index}>
                            <td>{st.name}</td>
                            <td>{st.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </FontDesc>
                  </td>
                  <td data-label="Manual">{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/t/stylesList')({
  component: () => <Template />,
  staticData: {
    title: 'T. Список стилей',
  },
});
