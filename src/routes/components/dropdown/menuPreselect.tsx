import { createFileRoute } from '@tanstack/react-router';
import { MenuPreSelect } from '#examples/dropdown/menuPreselect';

export const Route = createFileRoute('/components/dropdown/menuPreselect')({
  component: () => <MenuPreSelect />,
  staticData: {
    title: 'Menu. Меню c состоянием preselect',
    description:
      'Для активации работы режима preselected в меню необходимо указать preselectedModeActive. Переключение элементов в состояние preselected может осуществляться в неконтролируемом режиме, а для поиска нужного элемента меню по нажатию на кнопку необходимо перевести компонент в контролируемый режим и написать обработчик. Пример указан в коде.',
  },
});
