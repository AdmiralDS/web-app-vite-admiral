import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection, rowFlexMixin } from '#examples/-helpers';
import { TextButton } from '@admiral-ds/react-ui';

export const TextButtonBasic = () => {
  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <TextButton text="Text Button" />
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} />
      <TextButton text="Text Button" iconEnd={<AttachFileOutline />} />
    </ExampleSection>
  );
};
