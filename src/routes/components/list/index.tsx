import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ListItem, UnorderedList } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Списки могут быть:">
        <UnorderedList>
          <ListItem>
            Неупорядоченными, когда смысл списка не меняется в зависимости от порядка элементов. Используется маркеры:
            Bullet, Virgule, Icon.
          </ListItem>
          <ListItem>
            Упорядоченными, когда вам нужен пронумерованный список. В данном случае используются Letters и Numbers.
          </ListItem>
          <ListItem>Вложенными, а их разновидности могут смешиваться.</ListItem>
        </UnorderedList>
      </ExampleSection>
      <ExampleSection text="Рекомендации">
        <UnorderedList>
          <ListItem>Используйте список, если у вас есть два и более пунктов.</ListItem>
          <ListItem>
            Простые списки, разделенные запятыми, могут не нуждаться в разметке, но длинные списки или группы ссылок
            должны ее иметь.
          </ListItem>
          <ListItem>
            Организуйте списки так, чтобы пользователи могли понять взаимосвязь и группировку информации.
          </ListItem>
          <ListItem>Создавайте структурированные списки. Их легче использовать, чем простые таблицы.</ListItem>
        </UnorderedList>
      </ExampleSection>
      <ExampleSection text="Особенности">
        <UnorderedList>
          <ListItem>
            Виды списков Letters, Bullet, Vergule, Icon имеют постоянную ширину области с обозначением списка. Ширина
            это области в списках Numbers — динамическая.
          </ListItem>
          <ListItem>В списках Letters можно использовать как прописные, так и заглавные буквы</ListItem>
          <ListItem>
            Можно использовать следующие буквы:
            <br />
            Аа, Бб, Вв, Гг, Дд, Ее, Жж, Зз, Ии, Кк, Лл, Мм, Нн, Оо, Пп, Рр, Сс, Тт, Уу, Фф, Хх, Цц, Чч, Шш, Щщ, Ыы, Ээ,
            Юю, Яя
          </ListItem>
          <ListItem>
            Можно задавать произвольную ширину компонента и устанавливать расстояние между пунктами списка.
          </ListItem>
        </UnorderedList>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/list/')({
  component: () => <Template />,
  staticData: {
    title: 'List. Базовый пример',
    description:
      'Компонент для вертикальной группировки связанных по смыслу текстовых пунктов. Представлен в двух вариантах OrderedList и UnorderedList.',
  },
});
