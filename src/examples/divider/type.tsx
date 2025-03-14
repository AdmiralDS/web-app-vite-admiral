import { Divider } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

export const DividerType = () => {
  return (
    <>
      <ExampleSection text={'Горизонтальный'}>
        <Divider />
      </ExampleSection>
      <ExampleSection text={'Вертикальный'}>
        <Divider orientation="vertical" length="150px" />
      </ExampleSection>
    </>
  );
};
