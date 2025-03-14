import { useTheme } from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { LIGHT_THEME, Tag, Tags } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStyles = () => {
  const theme = useTheme() || LIGHT_THEME;
  return (
    <>
      <ExampleSection
        header="Статус через цветную статусную метку."
        text="Тэг может иметь цветную статусную метку, определяемую параметром kind."
      >
        <Tags>
          <Tag onClick={clickHandler}>Neutral</Tag>
          <Tag onClick={clickHandler} kind="success">
            Success
          </Tag>
          <Tag onClick={clickHandler} kind="primary">
            Primary
          </Tag>
          <Tag onClick={clickHandler} as="span" kind="danger">
            Danger
          </Tag>
          <Tag onClick={clickHandler} kind="warning">
            Warning
          </Tag>
        </Tags>
        <Tags dimension="s" style={{ marginTop: 24 }}>
          <Tag>Neutral</Tag>
          <Tag kind="success">Success</Tag>
          <Tag kind="primary">Primary</Tag>
          <Tag as="span" kind="danger">
            Danger
          </Tag>
          <Tag kind="warning">Warning</Tag>
        </Tags>
      </ExampleSection>
      <ExampleSection
        header="Статус через цвет обводки и фона."
        text="Тэг также может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент. Чтобы отобразить статус через цвет обводки и фона необходимо передать в компонент параметр statusViaBackground, установленный в true."
      >
        <Tags>
          <Tag onClick={clickHandler} statusViaBackground>
            Neutral
          </Tag>
          <Tag onClick={clickHandler} statusViaBackground kind="success">
            Success
          </Tag>
          <Tag onClick={clickHandler} statusViaBackground kind="primary">
            Primary
          </Tag>
          <Tag onClick={clickHandler} statusViaBackground kind="danger">
            Danger
          </Tag>
          <Tag onClick={clickHandler} statusViaBackground kind="warning">
            Warning
          </Tag>
        </Tags>
        <Tags dimension="s" style={{ marginTop: 24 }}>
          <Tag statusViaBackground>Neutral</Tag>
          <Tag statusViaBackground kind="success">
            Success
          </Tag>
          <Tag statusViaBackground kind="primary">
            Primary
          </Tag>
          <Tag statusViaBackground kind="danger">
            Danger
          </Tag>
          <Tag statusViaBackground kind="warning">
            Warning
          </Tag>
        </Tags>
      </ExampleSection>
      <ExampleSection
        header="Кастомные цвета."
        text={
          <>
            Тэг может иметь цветную статусную метку. Помимо предложенных вариантов метка может быть окрашена в любой
            цвет на усмотрение пользователя. Для этого в качестве значения параметра kind нужно указать объект со
            свойством background, содержащим значение кастомного цвета метки.
            <br />
            <br />
            Либо тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент. В этом
            случае, помимо предложенных вариантов, фон и обводку тега можно окрасить в любые цвета. Рекомендуются
            цветовые пары (фон, обводка) из представленных в палитре цветов по следующей схеме: фон - color 10, обводка
            - основной цвет минус 1 шаг вниз. Чтобы задать кастомные цвета фона и обводки тега нужно в качестве значения
            параметра kind указать объект со свойствами background и border, содержащими соответственно кастомные
            значения цветов фона и обводки тега.
            <br />
            <br />
            Также помимо свойств background и border пользователь может задать свойство backgroundHover. Данное свойство
            отвечает за цвет фона тега при ховере, в случае если тэг является активным. Рекомендуется в качестве
            значения backgroundHover выбирать из палитры цветов цвет, который на 1 шаг темнее цвета фона.
          </>
        }
      >
        <Tags>
          <Tag
            onClick={clickHandler}
            kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}
          >
            Purple
          </Tag>
          <Tag
            onClick={clickHandler}
            statusViaBackground
            kind={{
              background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
              border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
              backgroundHover: `var(--admiral-color-Teal_Teal20, ${theme.color['Teal/Teal 20']})`,
            }}
          >
            Teal
          </Tag>
          <Tag
            onClick={clickHandler}
            statusViaBackground
            kind={{
              background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
              border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
              backgroundHover: `var(--admiral-color-Magenta_Magenta20, ${theme.color['Magenta/Magenta 20']})`,
            }}
          >
            Magenta
          </Tag>
        </Tags>
        <Tags dimension="s" style={{ marginTop: 24 }}>
          <Tag
            kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}
          >
            Purple
          </Tag>
          <Tag
            statusViaBackground
            kind={{
              background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
              border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
            }}
          >
            Teal
          </Tag>
          <Tag
            statusViaBackground
            kind={{
              background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
              border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
            }}
          >
            Magenta
          </Tag>
        </Tags>
      </ExampleSection>
    </>
  );
};
