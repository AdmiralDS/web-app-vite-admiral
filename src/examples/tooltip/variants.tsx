import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { typography, T } from '@admiral-ds/react-ui';
import VIPOutline from '@admiral-ds/icons/build/category/VIPOutline.svg?react';
import { ButtonWithTooltip } from '#examples/-helpers/tooltip';

const CustomP = styled.p`
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  ${typography['Subtitle/Subtitle 3']};
`;

export const TooltipVariants = () => {
  const renderTooltipContent = () => {
    return (
      <>
        <CustomP>Фамилия Имя Отчество</CustomP>
        <T font={'Body/Body 2 Short'} color="Neutral/Neutral 00">
          Старший дизайнер
        </T>
      </>
    );
  };

  return (
    <ExampleSection>
      <ButtonWithTooltip renderContent={renderTooltipContent} buttonIcon={<VIPOutline />} />
    </ExampleSection>
  );
};
