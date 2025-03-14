import { ExampleSection } from '#routes/-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const NumberInputSpaces = () => {
  return (
    <>
      <ExampleSection text="Пользователь может с помощью параметров hideSpaceAfterPrefix и hideSpaceBeforeSuffix управлять видимостью пробелов после префикса и перед суффиксом соответственно. По умолчанию после префикса перед значением инпута и перед суффиксом после значения инпута пробелы проставляются.">
        <NumberInput
          onChange={(event) => {
            console.log(event.target.value);
          }}
          defaultValue="30"
          suffix="%"
          hideSpaceBeforeSuffix
          precision={0}
          placeholder="0%"
        />
      </ExampleSection>
      <ExampleSection>
        <NumberInput
          onChange={(event) => {
            console.log(event.target.value);
          }}
          defaultValue="1"
          prefix="№"
          hideSpaceAfterPrefix
          precision={0}
          placeholder="№0"
        />
      </ExampleSection>
    </>
  );
};
