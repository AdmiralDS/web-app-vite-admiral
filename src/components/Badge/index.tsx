import { Outlet } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';

import { NavLink } from '../Main/NavLink';

const links = [
  { text: 'Базовый пример', path: '' },
  { text: 'Варианты использования', path: '/variants' },
  { text: 'Accessability', path: '/accessability' },
];

export const BadgeExamples = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <T font="Body/Body 1 Long">Примеры компонента Badge</T>
      <nav>
        {links.map((link) => (
          <>
            <NavLink
              to={`/badge${link.path}`}
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

export * from './BadgeBasic';
export * from './BadgeVariants';
export * from './BadgeAccessability';
