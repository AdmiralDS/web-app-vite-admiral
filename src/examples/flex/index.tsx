import { ExampleSection } from '#examples/-helpers';
import { Flex, FLEX_CELL_MAX_SIZE, InputField, TextField } from '@admiral-ds/react-ui';

export const FlexBasic = () => {
  return (
    <ExampleSection>
      <Flex.Container rowGap={20} columnGap={10}>
        <Flex.Row rowGap={20} columnGap={10}>
          {Array.from({ length: FLEX_CELL_MAX_SIZE }, (_, i) => (
            <Flex.Cell columnGap={10} key={FLEX_CELL_MAX_SIZE - i} col={FLEX_CELL_MAX_SIZE - i}>
              <InputField label={`Инпут шириной ${FLEX_CELL_MAX_SIZE - i}`} />
            </Flex.Cell>
          ))}
          <Flex.GrowCell>
            <TextField label="TextField" required />
          </Flex.GrowCell>
        </Flex.Row>
        <Flex.Row rowGap={20} columnGap={10}>
          <Flex.Cell columnGap={10} col={5}>
            <InputField label={`Инпут шириной 5`} />
          </Flex.Cell>
          {/* пространство между инпутами в 3 колонки */}
          <Flex.Cell col={3} />
          <Flex.Cell columnGap={10} col={3}>
            <InputField label={`Инпут шириной 3`} />
          </Flex.Cell>
        </Flex.Row>
      </Flex.Container>
    </ExampleSection>
  );
};
