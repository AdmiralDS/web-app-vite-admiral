import { typography } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Title = styled.h5`
  position: relative;
  ${typography['Header/H5']};
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin: 0;
  padding: 0 12px 8px;
`;
const Version = styled.span`
  margin-left: 4px;
  color: var(--admiral-color-Neutral_neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${typography['Caption/Caption 2']}
`;

export const MenuTitle = ({ title, version }: { title: string; version: string }) => {
  return (
    <Title>
      {title}
      <Version>{version}</Version>
    </Title>
  );
};
