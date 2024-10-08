import { T } from '@admiral-ds/react-ui';
import { Outlet } from 'react-router-dom';

import { links } from '../routes';
import { NavLink } from './NavLink';

export const Layout = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <T font="Main/L">Admiral Components</T>

      <nav className="main">
        {links.map((link) => (
          <>
            <NavLink to={link.path} key={'link_' + link.text} style={style} $appearance="secondary">
              {link.text}
            </NavLink>
            /
          </>
        ))}
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};
