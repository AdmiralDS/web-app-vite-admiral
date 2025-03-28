import { useEffect, useMemo, useRef, useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { MenuButton, MenuItem, RenderOptionProps, Tooltip } from '@admiral-ds/react-ui';

const menuItems = [
  { id: 1, label: 'item-1' },
  { id: 2, label: 'item-2' },
  { id: 3, label: 'item-3' },
];

export const TooltipWithMenuButton = () => {
  const menuModel = useMemo(() => {
    return menuItems.map((item) => ({
      id: String(item.id),
      render: (props: RenderOptionProps) => (
        <MenuItem {...props} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <ExampleSection>
      <MenuButton ref={btnRef} dimension="m" items={menuModel}>
        TEST WITH TOOLTIP
      </MenuButton>
      {visible && (
        <Tooltip
          targetElement={btnRef.current}
          renderContent={() =>
            `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
    Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`
          }
          style={{ minWidth: '200px', maxWidth: '300px' }}
          id="test1"
        />
      )}
    </ExampleSection>
  );
};
