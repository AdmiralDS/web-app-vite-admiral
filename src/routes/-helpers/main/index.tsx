import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const Title = styled.h5`
  ${typography['Header/H5']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin: 0;
  padding: 0;
`;

export const Description = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  margin-top: 8px;
  margin-bottom: 40px;
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
