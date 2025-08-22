import type { SortDirection } from '@tanstack/react-table';
import {
  HeaderCellTitle,
  ColumnSeparator,
  SortIcon,
  TitleContent,
  type Dimension,
  SortIconWrapper,
  SortOrder,
} from './styled';
import { TitleText } from './TitleText';

interface Props {
  headerLineClamp: number;
  title: string;
  extraText: string;
  headerExtraLineClamp: number;
  visibleColumnSeparator: boolean;
  sort: SortDirection | false;
  sortIndex: number;
  sortable: boolean;
  dimension: Dimension;
  multiSortable: boolean;
}

export const HeaderCell = ({
  headerLineClamp,
  title,
  extraText,
  headerExtraLineClamp,
  visibleColumnSeparator,
  sort,
  sortIndex,
  sortable,
  dimension,
  multiSortable,
}: Props) => {
  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;

  return (
    <>
      <HeaderCellTitle>
        <TitleContent>
          <TitleText lineClamp={headerLineClamp} title={title} />
          {extraText && <TitleText extraText lineClamp={headerExtraLineClamp} title={title} />}
        </TitleContent>
        {sortable && (
          <SortIconWrapper>
            <SortIcon $sort={sort} width={iconSize} height={iconSize} />
            {multiSortable && sort && sortIndex && <SortOrder>{sortIndex}</SortOrder>}
          </SortIconWrapper>
        )}
      </HeaderCellTitle>

      {visibleColumnSeparator && <ColumnSeparator />}
    </>
  );
};
