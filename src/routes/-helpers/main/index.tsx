import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const Title = styled.h5`
  ${typography['Header/H5']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin: 0;
  padding: 0;
`;

export const Description = styled.div<{ $marginTop?: number; $grey?: boolean }>`
  ${typography['Body/Body 2 Long']}
  color: ${(p) =>
    p.$grey
      ? `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  margin-top: ${(p) => p.$marginTop ?? 8}px;
  max-width: 720px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 40px 0 28px;

  @media (min-width: 1600px) {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
  }
`;

export const Preview = styled.div<{ $marginTop?: number; $gap?: number }>`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${(p) => p.$marginTop ?? 40}px;
  gap: ${(p) => p.$gap ?? 40}px;
`;
