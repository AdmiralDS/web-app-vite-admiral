import './App.css';
import { DropdownContainer, SelectField, Option, DateField, Flex } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.22);
  padding: 24px;
`;

function Test() {
  const [clickOusideCounter, setClickOutsideCounter] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLDivElement | null>(null);

  const onClickOutside = (e: Event) => {
    console.log(e.target);
    setClickOutsideCounter((prev) => ++prev);
  };

  return (
    <>
      <div style={{ marginBottom: '300px' }} ref={(targetElement) => setTargetElement(targetElement)}>
        Outside click count: {clickOusideCounter}
      </div>
      <DropdownContainer alignSelf="flex-end" targetElement={targetElement} onClickOutside={onClickOutside}>
        <DropdownWrapper>
          <Flex.Container rowGap={16}>
            <Flex.Row>
              <DateField style={{ width: 300 }} />
            </Flex.Row>
            <Flex.Row>
              <SelectField style={{ width: 300 }} dropContainerClassName="inner_drop">
                <Option value="1">1</Option>
              </SelectField>
            </Flex.Row>
          </Flex.Container>
        </DropdownWrapper>
      </DropdownContainer>
    </>
  );
}

function App() {
  return (
    <>
      <Test />
      <Test />
    </>
  );
}

export default App;
