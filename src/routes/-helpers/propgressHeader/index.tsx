import styled from 'styled-components';

export interface PageTemplateProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  transform: translateX(0%);
  width: 70%;
  border-radius: 4px;
  overflow: hidden;
`;

const PageHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 38px;
  padding: 14px 16px;
  background-color: var(--admiral-color-Neutral_Neutral80, ${(p) => p.theme.color['Neutral/Neutral 80']});
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
`;

const PageContent = styled.div`
  width: 100%;
  height: 213px;
  transform: translateX(0%);
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
`;

export const PageTemplate = ({ children, ...props }: PageTemplateProps) => {
  return (
    <Wrapper {...props}>
      <PageHeader>
        <Dot />
        <Dot />
        <Dot />
      </PageHeader>
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};
