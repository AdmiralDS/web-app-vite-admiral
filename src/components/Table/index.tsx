import { Outlet } from 'react-router-dom';
import { T } from '@admiral-ds/react-ui';

import { NavLink } from '../Main/NavLink';

const tableLinks = [
  { text: 'Basic', path: '' },
  { text: 'Load on scroll', path: '/load-on-scroll' },
  { text: 'Load on scroll with spinner', path: '/load-on-scroll-with-spinner' },
  { text: 'Load on scroll with skeleton', path: '/load-on-scroll-with-skeleton' },
];

export const TableExamples = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <T font="Body/Body 1 Long">Примеры компонента Table</T>
      <nav>
        {tableLinks.map((link) => (
          <>
            <NavLink
              to={`/table${link.path}`}
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

export * from './TableBasic';
export * from './TableLoadOnScroll';
export * from './TableLoadOnScrollSkeleton';
export * from './TableLoadOnScrollSpinner';
