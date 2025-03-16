import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonMenuModes } from '#examples/floatingButton/withMenuModes';

export const Route = createFileRoute('/components/floatingButton/withMenuModes')({
  component: () => <FloatingButtonMenuModes />,
  staticData: {
    title: 'FloatingButtonMenu. Режимы использования',
    description:
      'Компонент FloatingButtonMenu может использоваться как в контролируемом, так и в некотролируемом режиме. У компонента есть параметр isOpen, с помощью которого можно управлять видимостью меню. Также существует колбек onOpenChange, который срабатывает при каждом нажатии на основную кнопку и при клике вне группы кнопок. При закрытом меню основная кнопка может содержать любую иконку, при открытии меню иконка меняется на иконку «Close».',
  },
});
