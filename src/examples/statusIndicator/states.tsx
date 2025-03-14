import { StatusIndicator } from '@admiral-ds/react-ui';
import CheckOutline from '@admiral-ds/icons/build/service/CheckOutline.svg?react';
import { ExampleSection } from '#routes/-helpers/examples';
import { css } from 'styled-components';

const Locked = css`
  color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  > div {
    svg {
      path {
        fill: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
      }
    }
  }
`;
const Warning = css`
  color: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color['Warning/Warning 50 Main']});
  > div {
    svg {
      path {
        fill: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color['Warning/Warning 50 Main']});
      }
    }
  }
`;
const Success = css`
  color: var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  > div {
    svg {
      path {
        fill: var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
      }
    }
  }
`;
const Waiting = css`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  > div {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
      }
    }
  }
`;

export const StatusIndicatorStates = () => {
  return (
    <>
      <ExampleSection text="Locked">
        <StatusIndicator cssMixin={Locked} text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Warning">
        <StatusIndicator cssMixin={Warning} text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Success">
        <StatusIndicator cssMixin={Success} text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
      <ExampleSection text="Waiting">
        <StatusIndicator cssMixin={Waiting} text="Текст" icon={<CheckOutline />} />
      </ExampleSection>
    </>
  );
};
