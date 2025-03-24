import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection } from '#examples/-helpers';
import { TextButton } from '@admiral-ds/react-ui';

export const TextButtonStates = () => {
  return (
    <>
      <ExampleSection text="Loading">
        <TextButton text="Text Button" loading iconStart={<AttachFileOutline />} />
      </ExampleSection>
      <ExampleSection text="Disabled">
        <TextButton text="Text Button" disabled iconStart={<AttachFileOutline />} />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <TextButton text="Text Button" skeleton iconEnd={<AttachFileOutline />} />
      </ExampleSection>
    </>
  );
};
