import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { IconButton, IconButtonGroup } from '@admiral-ds/react-ui';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';
import ShareOutline from '@admiral-ds/icons/build/service/ShareOutline.svg?react';
import EditOutline from '@admiral-ds/icons/build/system/EditOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

export const Sizes = () => {
  return (
    <>
      <ExampleSection text="Размер Xl">
        <IconButtonGroup>
          <IconButton>
            <PrintOutline />
          </IconButton>
          <IconButton>
            <ShareOutline />
          </IconButton>
          <IconButton>
            <EditOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </IconButtonGroup>
      </ExampleSection>
      <ExampleSection text="Размер L">
        <IconButtonGroup dimension="l">
          <IconButton>
            <PrintOutline />
          </IconButton>
          <IconButton>
            <ShareOutline />
          </IconButton>
          <IconButton>
            <EditOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </IconButtonGroup>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <IconButtonGroup dimension="m">
          <IconButton>
            <PrintOutline />
          </IconButton>
          <IconButton>
            <ShareOutline />
          </IconButton>
          <IconButton>
            <EditOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </IconButtonGroup>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <IconButtonGroup dimension="s">
          <IconButton>
            <PrintOutline />
          </IconButton>
          <IconButton>
            <ShareOutline />
          </IconButton>
          <IconButton>
            <EditOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </IconButtonGroup>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/iconButtonGroup/sizes')({
  component: () => <Sizes />,
  staticData: {
    title: 'IconButtonGroup. Размеры',
    description: 'Есть 4 размера по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).',
  },
});
