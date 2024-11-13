import styled from 'styled-components';

export const ExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

export const ExampleWrapperWithWidth = styled(ExampleWrapper)`
  > * {
    width: 90%;
  }
`;
