import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { T } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Text — компонент для работы с Typography. Компонент отображает текст{' '}
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
