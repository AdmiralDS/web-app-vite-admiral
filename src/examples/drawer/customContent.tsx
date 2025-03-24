import { useState } from 'react';
import { Drawer, Button, CheckboxField, DrawerContent } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const DrawerCustomContent = () => {
  const [opened, setOpened] = useState(false);

  return (
    <ExampleSection>
      <Button onClick={() => setOpened(true)}>Open drawer with custom content</Button>
      <Drawer isOpen={opened} onClose={() => setOpened(false)} aria-labelledby="drawer-title">
        <h1 id="drawer-title" style={{ paddingLeft: '24px' }}>
          <strong>Drawer title</strong>
        </h1>
        <DrawerContent style={{ maxWidth: 550 }}>
          <CheckboxField>Lorem ipsum dolor</CheckboxField>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
        </DrawerContent>
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: 24,
            alignSelf: 'flex-end',
          }}
        >
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            First button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Second button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Third button
          </Button>
        </div>
      </Drawer>
    </ExampleSection>
  );
};
