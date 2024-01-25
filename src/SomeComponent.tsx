import { ContentSwitcherItem, ContentSwitcherItemProps } from '@admiral-ds/react-ui';

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
      <ContentSwitcherItem myValue={123} active={true}>
        ContentSwitcherItem
      </ContentSwitcherItem>

      {/*// @FIXME: ts ошибка!*/}
      <MyItem active={true}>MyItem</MyItem>
    </>
  );
};
