import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { T } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Основным шрифтом в дизайн-системе банка ВТБ является VTB Group UI. Представлен расширеный набор стилей,
              которые могут использоваться в интерфейсах разной плотности. Используется три начертания — Book, Medium и
              Semibold. Book, как основной стиль системы. Medium используется в кнопках. Semibold для заголовков и
              акцентированных текстов.
            </PStyled>
            <PStyled>
              Скачать шрифт VTB Group UI можно по{' '}
              <a target="_blank" href="https://disk.yandex.ru/d/SMG2NwRJ0RGILw" rel="noopener noreferrer">
                ссылке
              </a>
              .
            </PStyled>
            <PStyled>
              T — компонент для работы с Typography. Компонент отображает текст{' '}
              <a
                target="_blank"
                href="https://styled-components.com/docs/api#as-polymorphic-prop"
                rel="noopener noreferrer"
              >
                в соответствии с заданными HTML-тегом
              </a>{' '}
              и стилем шрифта.
            </PStyled>
            <PStyled>
              <strong>!!!ВАЖНО:</strong> при использовании компонента T без стилизации необходимо использовать prop
              "as". Если необходимо кастомизировать компонент (с помощью styled(T)),{' '}
              <a
                target="_blank"
                href="https://styled-components.com/docs/api#forwardedas-prop"
                rel="noopener noreferrer"
              >
                следует использовать prop forwardedAs
              </a>
              .
            </PStyled>
          </>
        }
      >
        <T font="Body/Body 1 Long" as="p">
          Текст со стилем Body/Body 1 Long.
        </T>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/t/')({
  component: () => <Template />,
  staticData: {
    title: 'T. Базовый пример',
  },
});
