import { ExampleSection } from '#routes/-helpers/examples';
import { ColorName, DefaultFontColorName, LIGHT_THEME, T, TooltipHoc, typography } from '@admiral-ds/react-ui';
import styled, { useTheme } from 'styled-components';
import { NEW_FONTS } from '#routes/-helpers/t/storyDescriptions';
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
  border-radius: 6px;
  width: 100%;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});

  td[data-label] {
    text-align: left;
    padding: 8px 30px 8px 8px;
    border-top: 1px solid var(--admiral-color-Neutral_Neutral70, ${(p) => p.theme.color['Neutral/Neutral 70']});
  }
  th {
    text-align: left;
    padding: 8px 30px 8px 8px;
    ${typography['Header/H3']}
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  td[data-label]:last-child {
    padding: 8px;
  }

  th[data-label='Style'],
  td[data-label='Style'] {
    width: 130px;
    white-space: nowrap;
  }
  th[data-label='Manual'],
  td[data-label='Manual'] {
    width: auto;
    min-width: 200px;
  }
  th[data-label='Props'],
  td[data-label='Props'] {
    width: 250px;
    max-width: 250px;
  }
  th[data-label='Colors'],
  td[data-label='Colors'] {
    width: 100px;
    max-width: 100px;
    min-width: 100px;
  }
`;

const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

export const ColorCircle = styled.div<{ $color: ColorName; $border?: boolean }>`
  display: flex;
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme, $color }) => {
    const cssCustomProp = `--admiral-color-${$color.replace('/', '_').replaceAll(' ', '')}`;
    return $color ? `var(${cssCustomProp}, ${theme.color[$color]})` : 'transparent';
  }};
  ${({ $border, theme }) =>
    $border && `border: 1px solid var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']});`}
  box-sizing: border-box;
`;

export const ColorBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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
const InfoCircle = TooltipHoc(ColorCircle);

export const TStylesList = () => {
  return NEW_FONTS.map((group, index: number) => (
    <ExampleSection style={{ overflowX: 'auto' }} header={<T font="Header/H3">{group.groupName}</T>} key={index}>
      <Table>
        <thead>
          <tr>
            <th data-label="Style">Стиль</th>
            <th data-label="Props">Характеристики</th>
            <th data-label="Manual">Применение</th>
            <th data-label="Colors">Цвета</th>
          </tr>
        </thead>
        <tbody>
          {group.fonts.map((item, index: number) => {
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
            const exampleText = item.name.split('/')[1];
            return (
              <tr key={index}>
                <td data-label="Style">
                  <T font={item.name} as="div">
                    {exampleText}
                  </T>
                  <CopyButton text={text} renderContent={() => 'Копировать пример использования'} />
                </td>
                <td data-label="Props">
                  <FontDesc>
                    <tbody>
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
                <td data-label="Colors">
                  <ColorBox>
                    {group.colors.map((color, index) => (
                      <InfoCircle
                        renderContent={() => color}
                        key={index}
                        $color={color}
                        $border={color === 'Special/Static White'}
                      ></InfoCircle>
                    ))}
                  </ColorBox>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ExampleSection>
  ));
};
