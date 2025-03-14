import { useState } from 'react';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
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

export const FloatingButtonMenuModes = () => {
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
