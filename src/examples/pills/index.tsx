import { ExampleSection } from '#examples/-helpers';
import { Pill, Pills } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import HeartOutline from '@admiral-ds/icons/build/category/HeartOutline.svg?react';

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = css<{ $status?: Status }>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'Error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'Success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'Special':
        return `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})`;
      case 'Warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'Attention':
        return `var(--admiral-color-Attention_Attention50Main, ${theme.color['Attention/Attention 50 Main']})`;
      default:
        return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
    }
  }}
`;

const getFontColorByStatus = css<{ $status?: Status }>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'Attention':
        return `var(--admiral-color-Special_DarkStaticNeutral00, ${theme.color['Special/Dark Static Neutral 00']})`;
      case 'Error':
      case 'Success':
      case 'Special':
      case 'Warning':
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      default:
        return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
    }
  }}
`;

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
`;

const stylesByStatusCssMixin = css<{ $status?: Status }>`
  background-color: ${getBackgroundColorByStatus};
  color: ${getFontColorByStatus};
`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${getFontColorByStatus};
  }
`;

export const PillsBasic = () => {
  return (
    <ExampleSection
      text={
        <>
          Компонент Pills - визуальный индикатор для обозначения статуса какого-либо элемента для быстрой идентификации.
          Компонент предназначен для максимальной гибкости в дизайне, для остальных случаев используйте компонент Tag.
          <br />
          <br />
          Компонент может быть с иконкой или без. Фон компонента и текст с иконками можно окрашивать в произвольные
          цвета из палитры. Следите за читаемостью текста, не все комбинации цвета обеспечивают достаточный контраст
          между текстом и фоном. Отдавайте предпочтения контрастным Main-цветам. Всегда думайте как различные цветовые
          сочетания будут выглядеть в темной теме, назначайте статичные цвета, где это необходимо.
          <br />
          <br />В данном примере заданы варианты статусов с определенными цветами фона и текста (StatusPill). В
          даьнейшем они использованы для создания Pill с дропдауном и Nested Pills.
          <br />
          <br />
          Pills можно использовать группами. Горизонтальные и вертикальные отступы между соседними тэгами равны 4px.
        </>
      }
    >
      <Pills>
        <StatusPill $status="Success">
          <HeartOutlinePillIcon />
          <span>Playground</span>
        </StatusPill>
        <StatusPill $status="Error">Playground</StatusPill>
        <StatusPill $status="Warning">Playground</StatusPill>
        <StatusPill $status="Special">Playground</StatusPill>
        <StatusPill $status="Attention">Playground</StatusPill>
        <StatusPill>Playground</StatusPill>
      </Pills>
    </ExampleSection>
  );
};
