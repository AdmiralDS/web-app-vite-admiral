import { ExampleSection } from '#examples/-helpers';
import { IconButton, IconButtonGroup, TooltipHoc } from '@admiral-ds/react-ui';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import ShareOutline from '@admiral-ds/icons/build/service/ShareOutline.svg?react';
import EditOutline from '@admiral-ds/icons/build/system/EditOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

const IconButtonWithTooltip = TooltipHoc(IconButton);

export const Tooltip = () => {
  return (
    <ExampleSection>
      <IconButtonGroup>
        <IconButtonWithTooltip renderContent={() => 'Print'}>
          <PrintOutline />
        </IconButtonWithTooltip>
        <IconButtonWithTooltip renderContent={() => 'Share'}>
          <ShareOutline />
        </IconButtonWithTooltip>
        <IconButtonWithTooltip renderContent={() => 'Edit'}>
          <EditOutline />
        </IconButtonWithTooltip>
        <IconButtonWithTooltip renderContent={() => 'Delete'}>
          <DeleteOutline />
        </IconButtonWithTooltip>
      </IconButtonGroup>
    </ExampleSection>
  );
};
