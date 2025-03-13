import { createFileRoute } from '@tanstack/react-router';
import AttachFileOutline from '@admiral-ds/icons/build/system/AttachFileOutline.svg?react';
import { useMemo, useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
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
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const model = useMemo(() => {
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
    <>
      <ExampleSection text="Disabled">
        <TextButtonMenu
          text="Text Button"
          disabled
          iconStart={<AttachFileOutline />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Loading">
        <TextButtonMenu
          text="Text Button"
          loading
          iconStart={<AttachFileOutline />}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <TextButtonMenu
          text="Text Button"
          skeleton
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/textButtonMenu/states')({
  component: () => <Template />,
  staticData: {
    title: 'TextButtonMenu. Состояния',
  },
});
