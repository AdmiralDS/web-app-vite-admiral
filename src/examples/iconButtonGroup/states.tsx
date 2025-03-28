import { ExampleSection } from '#examples/-helpers';
import { IconButton, IconButtonGroup } from '@admiral-ds/react-ui';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import ShareOutline from '@admiral-ds/icons/build/service/ShareOutline.svg?react';
import EditOutline from '@admiral-ds/icons/build/system/EditOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export const States = () => {
  return (
    <ExampleSection>
      <IconButtonGroup>
        <IconButton>
          <PrintOutline />
        </IconButton>
        <IconButton disabled>
          <ShareOutline />
        </IconButton>
        <IconButton loading>
          <EditOutline />
        </IconButton>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </IconButtonGroup>
    </ExampleSection>
  );
};
