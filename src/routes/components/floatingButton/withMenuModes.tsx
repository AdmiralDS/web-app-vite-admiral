import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';
import { FloatingButton, FloatingButtonMenu, Toggle } from '@admiral-ds/react-ui';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';

const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 200px;
  transform: scale(1);
`;

export const Template = () => {
  const [open, setOpen] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(event.currentTarget.checked);
  };

  return (
    <>
      <ExampleSection text="Контролируемый режим">
        <Layout>
          <Toggle onChange={onChange}>Открыть/закрыть меню</Toggle>
          <FloatingButtonMenu
            icon={<EmailOutline />}
            isOpen={open}
            // eslint-disable-next-line no-console
            onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu1' : 'Close menu1')}
            containerStyle={{ left: '28px' }}
          >
            <FloatingButton appearance="secondary">
              <DeleteOutline />
            </FloatingButton>
            <FloatingButton appearance="secondary">
              <PrintOutline />
            </FloatingButton>
          </FloatingButtonMenu>
        </Layout>
      </ExampleSection>
      <ExampleSection text="Неконтролируемый режим">
        <Layout>
          <FloatingButtonMenu
            icon={<EmailOutline />}
            // eslint-disable-next-line no-console
            onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu2' : 'Close menu2')}
          >
            <FloatingButton appearance="secondary">
              <DeleteOutline />
            </FloatingButton>
            <FloatingButton appearance="secondary">
              <PrintOutline />
            </FloatingButton>
          </FloatingButtonMenu>
        </Layout>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/floatingButton/withMenuModes')({
  component: () => <Template />,
  staticData: {
    title: 'FloatingButtonMenu. Режимы использования',
    description:
      'Компонент FloatingButtonMenu может использоваться как в контролируемом, так и в некотролируемом режиме. У компонента есть параметр isOpen, с помощью которого можно управлять видимостью меню. Также существует колбек onOpenChange, который срабатывает при каждом нажатии на основную кнопку и при клике вне группы кнопок. При закрытом меню основная кнопка может содержать любую иконку, при открытии меню иконка меняется на иконку «Close».',
  },
});