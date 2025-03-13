import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { MenuItem, RenderOptionProps, TextButtonMenu } from '@admiral-ds/react-ui';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};
const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const Template = () => {
  const [selected1, setSelected1] = useState<string | undefined>(undefined);
  const [selected2, setSelected2] = useState<string | undefined>(undefined);
  const model1 = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const model2 = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="l" {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  return (
    <ExampleSection cssMixin={rowFlexMixin}>
      <TextButtonMenu
        text="Text Button"
        selected={selected1}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected1(id);
        }}
        items={model1}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="text-button-menu-with-dropdown"
        className="text-button-menu-class"
        dropContainerClassName="dropContainerClass"
      />
      <TextButtonMenu
        text="Text Button"
        iconStart={<AttachFileOutline />}
        selected={selected2}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected2(id);
        }}
        items={model2}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="text-button-menu-with-dropdown"
        className="text-button-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/textButtonMenu/')({
  component: () => <Template />,
  staticData: {
    title: 'TextButtonMenu. Базовый пример',
    description: 'Может быть с иконкой в начале или только с текстом.',
  },
});
