import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { MenuItem, OverflowMenu, RenderOptionProps } from '@admiral-ds/react-ui';
import MinusCircleOutline from '@admiral-ds/icons/build/service/MinusCircleOutline.svg?react';

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

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
  },
  {
    id: '3',
    display: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const Template = () => {
  const dimensionL = 'l';
  const dimensionM = 'm';
  const dimensionS = 's';
  const modelL = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionL} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionM} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.id === '1',
    }));
  }, []);
  const modelS = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionS} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <>
      <ExampleSection
        cssMixin={rowFlexMixin}
        header="Горизонтальная ориентация"
        text="Применяется, если компонент является продолжением логического ряда контролов (например в Tab Menu)."
      >
        <OverflowMenu
          items={modelL}
          selected={selected}
          dimension={dimensionL}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component L"
        />
        <OverflowMenu
          items={modelM}
          dimension={dimensionM}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component M"
        />
        <OverflowMenu
          items={modelS}
          dimension={dimensionS}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component S"
        />
      </ExampleSection>
      <ExampleSection
        cssMixin={rowFlexMixin}
        header="Вертикальная ориентация"
        text="Применяется в случае, если это отдельно стоящее меню."
      >
        <OverflowMenu
          alignSelf="flex-start"
          items={modelL}
          dimension={dimensionL}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical L"
        />
        <OverflowMenu
          items={modelM}
          dimension={dimensionM}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical M"
        />
        <OverflowMenu
          items={modelS}
          dimension={dimensionS}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical S"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/overflowMenu/styles')({
  component: () => <Template />,
  staticData: {
    title: 'OverflowMenu. Размеры и ориентация',
    description:
      'Компонент имеет три размера — L 24px, M 20px, S 16px. Рекомендуется к размерам компонента L и M применять выпадающее меню размера M с высотой строки 40px. Для размера S использовать выпадающее меню размера S с высотой строки 32px. В зависимости от контекста применяется вертикальная или горизонтальная ориентация точек.',
  },
});
