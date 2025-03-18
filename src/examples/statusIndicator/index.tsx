import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '#examples/-helpers';

export const StatusIndicatorBasic = () => {
  return (
    <ExampleSection>
      <StatusIndicator text="Текст индикатора" icon={<CheckOutline />} />
    </ExampleSection>
  );
};
