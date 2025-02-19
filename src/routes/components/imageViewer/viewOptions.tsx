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
          <li>
            При открытии изображение занимает 70% высоты экрана, но не более 100% ширины экрана. Выравнивание по центру.
          </li>
          <li>
            Если картинка невысокого разрешения и в масштабе 1:1 меньше 70% высоты экрана, то она отображается в
            масштабе 1:1, но не более 100% ширины экрана.
          </li>
          <li>
            Двойной клик по изображению увеличивает его до масштаба 1:1, при этом картинка может выходить за рамки
            экрана. Повторное двойное нажатие возвращает масштаб на дефолтное значение. Область изображения, где был
            произведен клик, всегда видна при увеличении.
          </li>
          <li>
            Колесико мышки плавно увеличивает и уменьшает масштаб изображения. Центром увеличения является область под
            курсором.
          </li>
          <li>
            Кнопки увеличения на панели инструментов по дефолту масштабируют картинку на 50% с каждым нажатием,
            ScaleStep=0,5. Пользователь может изменить этот параметр. Выравнивание при масштабировании — по центру.
          </li>
          <li>
            Максимальный размер увеличения — 1000% от исходного разрешения картинки. Минимальный размер уменьшения — 70%
            высоты экрана, либо 1:1, если картинка при таком масштабе занимает менее 70% высоты экрана.
          </li>
          <li>При достижении крайних положений масштабирования кнопки масштабирования принимают состояние Disable</li>
          <li>
            Зажимая ЛКМ, можно перемещать изображение по экрану. Если изображение больше видимой области экрана (при
            зуме) и при перемещении осталось пустое пространство с краев, то после отпускания ЛКМ, изображение
            «примагничивается» к краям, заполняя экран.
          </li>
          <li>Клик вне зоны изображения, клавиша «Esc» или нажатие на кнопку закрытия закрывает изображение.</li>
        </>
      }
    >
      <ImageViewer items={items} onTransform={handleTransform}></ImageViewer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/imageViewer/viewOptions')({
  component: () => <Template />,
  staticData: {
    title: 'ImageViewer. Алгоритм отображения',
    description: '',
  },
});
