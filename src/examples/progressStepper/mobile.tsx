import { ExampleSection, MobileTopContainer } from '#examples/-helpers';
import { ProgressStepper } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const ProgressStepperMobile = () => (
  <>
    <ExampleSection text="Для корректного отображения адаптива элемента на устройстве с шириной экрана меньше 420px стоит вручную настроить минимальную ширину компонента">
      <MobileTopContainer>
        <ProgressStepper style={{ minWidth: '100%' }} steps={steps} activeStep={0} mobile />
      </MobileTopContainer>
    </ExampleSection>
  </>
);
