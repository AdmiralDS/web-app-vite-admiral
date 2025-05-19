import { createFileRoute } from '@tanstack/react-router';
import { TextInputSizes } from '#examples/textInput/sizes';

export const Route = createFileRoute('/components/textInput/sizes')({
  component: () => <TextInputSizes />,
  staticData: {
    title: 'TextInput. Размеры',
    description:
      'Поля ввода представлены в трех размерностях по высоте — XL, M и S. Ширина изменяется вручную, в зависимости от предполагаемого объема текста.',
  },
});
