import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '#routes/-helpers/examples';

export const StatusIndicatorBasic = () => {
  return (
    <ExampleSection>
      <StatusIndicator text="Текст индикатора" icon={<CheckOutline />} />
    </ExampleSection>
  );
};
