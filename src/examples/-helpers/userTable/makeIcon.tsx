import type { FC, SVGProps } from 'react';
import styled from 'styled-components';

export const makeIcon = (Svg: FC<SVGProps<SVGSVGElement>>, size = '20px'): FC<SVGProps<SVGSVGElement>> => styled(Svg)`
  user-select: none;
  width: ${size};
  height: ${size};
  display: inline-block;
  flex-shrink: 0;

  &&& > path {
    fill: currentColor;
  }
`;
