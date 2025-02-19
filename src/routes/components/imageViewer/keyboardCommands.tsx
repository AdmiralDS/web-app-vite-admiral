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
  {
    src: 'ds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13',
    alt: 'Cute corgie',
    onError: handleError,
  },
];
const handleTransform = (info: { transform: TransformType; action: TransformAction }) => {
  // eslint-disable-next-line no-console
  console.log(info);
};

const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          <li>Esc — закрывает показ</li>
          <li>Стрелки влево/вправо — листают изображения</li>
          <li>Стрелки вверх/вниз — изменяют масштаб</li>
          <li>
            F — изображение заполняет весь экран по вертикали или горизонтали в зависимости от того, какое событие
            наступит первым. Повторное нажатие — дефолтный масштаб.
          </li>
          <li>Enter — устанавливает масштаб 1:1, повторное нажатие — дефолтный масштаб</li>
          <li>Space — листает изображения вправо</li>
        </>
      }
    >
      <ImageViewer items={items} onTransform={handleTransform}></ImageViewer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/imageViewer/keyboardCommands')({
  component: () => <Template />,
  staticData: {
    title: 'ImageViewer. Клавиатурные команды',
    description: '',
  },
});
