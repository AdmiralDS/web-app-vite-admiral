import { createFileRoute } from '@tanstack/react-router';
import { DrawerMobile } from '#examples/drawer/mobile';

export const Route = createFileRoute('/components/drawer/mobile')({
  component: () => <DrawerMobile />,
  staticData: {
    title: 'Drawer. Адаптив (mobile)',
    description:
      'Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры. На мобильных устройствах компонент всегда появляется с правой стороны экрана. Заполняет весь экран по ширине, кроме стандартного отступа для контента с левой стороны. Для того чтобы перевести компонент в адаптивный режим, используйте параметр mobile.',
  },
});
