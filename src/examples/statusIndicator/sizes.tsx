import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '#examples/-helpers';

export const StatusIndicatorSizes = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <StatusIndicator dimension="s" text="P 14px/20 book" icon={<CheckOutline />} />
      </ExampleSection>
    </>
  );
};
