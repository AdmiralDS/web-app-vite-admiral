import styled from 'styled-components';
import { Dimension } from '../types';
import { cellStyle } from '../mixins';
import { CellTd, BodyTr } from './style';

const EmptyCell = styled(CellTd)`
  grid-column: 1 / -1;
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${cellStyle}
`;

type EmptyRowProps = {
  underline: boolean;
  dimension: Dimension;
  children: React.ReactNode;
};

export const EmptyRow = ({ dimension, underline, children }: EmptyRowProps) => {
  return (
    <BodyTr className="tr" $dimension={dimension} $showUnderline={underline}>
      <EmptyCell className="td" $dimension={dimension} $resizer={false}>
        {children}
      </EmptyCell>
    </BodyTr>
  );
};
