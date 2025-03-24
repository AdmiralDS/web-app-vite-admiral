import { ExampleSection } from '#examples/-helpers';
import { MainPrimaryColorName, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const BlueText = styled(T)`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color[MainPrimaryColorName]});
`;

const OrangeColor = css`
  color: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color['Warning/Warning 50 Main']});
`;

export const TVariants = () => {
  return (
    <>
      <ExampleSection>
        <BlueText font={'Body/Body 1 Short'} forwardedAs="a" href={'https://'}>
          Это ссылка (forwardedAs="a") со стилем Body/Body 1 Short, цветом шрифта Primary.
        </BlueText>
        <T font="Body/Body 1 Long" as="p">
          Текст со стилем Body/Body 1 Long.
        </T>
        <T font="Body/Body 1 Long" as="h3" cssMixin={OrangeColor}>
          Это заголовок третьего уровня (as="h3"), стилем Body/Body 1 Long и использованием cssMixin.
        </T>
        <T font="Body/Body 2 Long" as="h3" color="Purple/Purple 60 Main">
          Это заголовок третьего уровня (as="h3") и стилем Body/Body 2 Long цвета Purple/Purple 60 Main.
        </T>
      </ExampleSection>
      <ExampleSection text="Для отображения в состоянии skeleton должен быть указан текст">
        <T font="Body/Body 2 Long" as="h2" skeleton={true}>
          Это заголовок второго уровня (as="h2").
        </T>
      </ExampleSection>
    </>
  );
};
