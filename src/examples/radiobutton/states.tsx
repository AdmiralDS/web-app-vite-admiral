import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const RadioButtonState = () => {
  return (
    <>
      <ExampleSection text="Checked">
        <Container>
          <RadioButton value={1} checked onChange={() => undefined}>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked onChange={() => undefined}>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Not checked">
        <Container>
          <RadioButton value={1} checked={false} onChange={() => undefined}>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked={false} onChange={() => undefined}>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="В две строки">
        <Container>
          <RadioButton value={1} checked={false} onChange={() => undefined}>
            Двойная
            <br />
            строка
          </RadioButton>
          <RadioButton dimension="s" value={1} checked={false} onChange={() => undefined}>
            Двойная
            <br />
            строка
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Checked readonly">
        <Container>
          <RadioButton value={1} checked readOnly>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked readOnly>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Not checked readonly">
        <Container>
          <RadioButton value={1} checked={false} readOnly>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked={false} readOnly>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Checked disabled">
        <Container>
          <RadioButton value={1} checked disabled onChange={() => undefined}>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked disabled onChange={() => undefined}>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Not checked disabled">
        <Container>
          <RadioButton value={1} checked={false} disabled onChange={() => undefined}>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked={false} disabled onChange={() => undefined}>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
      <ExampleSection text="Error">
        <Container>
          <RadioButton value={1} checked={false} error onChange={() => undefined}>
            Text
          </RadioButton>
          <RadioButton dimension="s" value={1} checked={false} error onChange={() => undefined}>
            Text
          </RadioButton>
        </Container>
      </ExampleSection>
    </>
  );
};
