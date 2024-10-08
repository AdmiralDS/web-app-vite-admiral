import { Outlet } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';

import { NavLink } from '../Main/NavLink';

const links = [
  { text: 'Базовый пример', path: '' },
  { text: 'Стили', path: '/styles' },
  { text: 'С иконкой', path: '/icon' },
  { text: 'С лоадером', path: '/loader' },
  { text: 'С бейджем', path: '/badge' },
];

export const ButonExamples = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <T font="Body/Body 1 Long">Примеры компонента Button</T>
      <nav>
        {links.map((link) => (
          <>
            <NavLink
              to={`/button${link.path}`}
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

export * from './ButtonBasic';
export * from './ButtonLoader';
export * from './ButtonStyles';
export * from './ButtonWithBadge';
export * from './ButtonWithIcon';
