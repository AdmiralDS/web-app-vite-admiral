import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { ExampleSection } from '../../-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Mobile = () => {
  return (
    <>
      <ExampleSection text="Текст справа">
        <div style={{ width: '400px' }}>
          <Toggle labelPosition="left">Some label</Toggle>
          <Separator />
          <Toggle labelPosition="left" width="200px">
            Some label
          </Toggle>
          <Separator />
          <Toggle labelPosition="left" width={300}>
            Some label
          </Toggle>
          <Separator />
          <Toggle labelPosition="left" width="100%">
            Some label
          </Toggle>
        </div>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/mobile')({
  component: () => <Mobile />,
  staticData: {
    title: 'Toggle. Адаптив',
    description:
      'Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных устройствах. При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно вытянуть на всю ширину экрана.',
  },
});
