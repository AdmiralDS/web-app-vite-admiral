import { ContentSwitcherItem, ContentSwitcherItemProps, Link } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

const dashedBorder = css`
  border: dashed 1px ${(p) => p.theme.color['Cyan/Cyan 40']};
`;
interface MyProps extends ContentSwitcherItemProps {
  test?: string;
}

const MyItem = (props: MyProps) => {
  return <ContentSwitcherItem {...props} />;
};

export const SomeComponent = () => {
  return (
    <>
      {/*// @FIXME: Не типизируется!*/}
      <ContentSwitcherItem active={true}>ContentSwitcherItem</ContentSwitcherItem>

      {/*// @FIXME: ts ошибка!*/}
      <MyItem active={true} cssMixin={dashedBorder}>
        MyItem
      </MyItem>

      <Link>link</Link>
    </>
  );
};
