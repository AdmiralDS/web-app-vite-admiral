import { Outlet } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';

import { NavLink } from '../Main/NavLink';

const links = [
  { text: 'Базовый пример', path: '' },
  { text: 'Размеры', path: '/dimension' },
  { text: 'Скрытие разделителей', path: '/divider' },
  { text: 'Расположение шеврона слева', path: '/icon' },
  { text: 'Режимы использования', path: '/modes' },
];

export const AccordionExamples = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <T font="Body/Body 1 Long">Примеры компонента Accordion</T>
      <nav>
        {links.map((link) => (
          <>
            <NavLink
              to={`/accordion${link.path}`}
              key={'link_' + link}
              style={style}
              $appearance="secondary"
              $dimension="s"
            >
              {link.text}
            </NavLink>
            /
          </>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export * from './AccordionBasic';
export * from './AccordionDimension';
export * from './AccordionDivider';
export * from './AccordionIcon';
export * from './AccordionModes';
