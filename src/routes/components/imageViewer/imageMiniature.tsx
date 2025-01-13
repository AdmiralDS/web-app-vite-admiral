import { createFileRoute } from '@tanstack/react-router';

import { ImageViewer } from '@admiral-ds/react-ui';
import type { ImageProps, TransformAction, TransformType } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
  // eslint-disable-next-line no-console
  console.log('error', e);
};

const items: ImageProps[] = [
  {
    src: 'https://avatars.mds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13',
    alt: 'Cute corgie',
    onError: handleError,
  },
  {
    src: 'https://sun9-35.userapi.com/impf/c841529/v841529284/5ff85/i4ycpPSO7Uc.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,320x214&sign=a36d32df90680b502bc60bbc3360adc7&from=bu&u=lLklGz-4D5hVHBtzhyzRRNYz7486j6Jj_Ht0c8CXRmo&cs=320x214',
    alt: 'Small picture',
    onError: handleError,
  },
  {
    src: 'https://otvet.imgsmail.ru/download/97444257_e4a38eccad081ceb92cb3f8a1594218e_800.jpg',
    alt: 'Cute norwitch',
    onError: handleError,
  },
];
const handleTransform = (info: { transform: TransformType; action: TransformAction }) => {
  // eslint-disable-next-line no-console
  console.log(info);
};

const Template = () => {
  return (
    <>
      <ExampleSection text="Размер XL">
        <ImageViewer appearance="multiple" dimension="xl" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
      <ExampleSection text="Размер L">
        <ImageViewer appearance="multiple" dimension="l" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <ImageViewer appearance="multiple" dimension="m" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <ImageViewer appearance="multiple" dimension="s" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
      <ExampleSection text="Размер XS">
        <ImageViewer appearance="multiple" dimension="xs" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
      <ExampleSection text="Размер XXS">
        <ImageViewer appearance="multiple" dimension="xxs" items={items} onTransform={handleTransform}></ImageViewer>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/imageViewer/imageMiniature')({
  component: () => <Template />,
  staticData: {
    title: 'ImageViewer. Отображение миниатюр',
    description:
      'Может использоваться как отдельно, так и в группе, если изображений несколько. Присутствует 6 размеров.',
  },
});
